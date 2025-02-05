import express from 'express';
import appointmentService from '../services/appoinmentService.js';
import validators from '../validators/appointmentValidator.js';
import errorMiddleware from '../middlewares/errorHandler.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import validate from '../middlewares/validationErrorsHandler.js';

let router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const appointments = await appointmentService.getAll();
    res.status(200).json(appointments);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const appointment = await appointmentService.getById(id);

    if(appointment) {
        res.status(200).json(appointment);
    } else {
        res.status(404).json({ message: 'Appointment not found' });
    }
}));

router.get('/doctor/:doctorId', asyncHandler(async (req, res) => {
    const { doctorId } = req.params;

    const appointments = await appointmentService.getByDoctorId(doctorId);
    res.status(200).json(appointments);
}));

router.get('/pacient/:pacientId', asyncHandler(async (req, res) => {
    const { pacientId } = req.params;
    
    const appointments = await appointmentService.getByPacientId(pacientId);
    res.status(200).json(appointments);
}));

router.post('/', validate(validators.createAppointmentValidator()), asyncHandler(async (req, res) => {
    const { pacientId, doctorId, date, reason } = req.body;

    const appointment = await appointmentService.saveAppointment({ pacientId, doctorId, date, reason });
    res.status(201).json(appointment);
}));

router.put('/:id', validate(validators.updateAppointmentValidator()), asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { date, reason } = req.body;

    await appointmentService.updateAppointment(id, { date, reason });
        
    res.status(204).send();
}));

router.patch('/:id/reschedule', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;

    await appointmentService.rescheduleAppointment(id, date);
        
    res.status(204).send();
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;

    await appointmentService.deleteAppointment(id);
        
    res.status(204).send();
}));


router.use(errorMiddleware);

export default router;