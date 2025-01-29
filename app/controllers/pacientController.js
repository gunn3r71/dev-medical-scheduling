import express from 'express';
import pacientService from '../services/pacientService.js';
import errorMiddleware from '../middlewares/errorHandler.js';
import asyncHandler from '../middlewares/asyncHandler.js';

let router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const pacients = await pacientService.getAll();
    res.status(200).json(pacients);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const pacient = await pacientService.getById(id);

    if(pacient) {
        res.status(200).json(pacient);
    } else {
        res.status(404).json({ message: 'Pacient not found' });
    }
}));

router.post('/', async (req, res) => {
    const { name, birthDate, lastMedicalAppointment, phoneNumber, email }  = req.body;

    const pacient = await pacientService.savePacient({ name, birthDate, lastMedicalAppointment, phoneNumber, email });
    res.status(201).json(pacient);
});

router.put('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, birthDate, lastMedicalAppointment, phoneNumber, email } = req.body;

    await pacientService.updatePacient(id, { name, birthDate, lastMedicalAppointment, phoneNumber, email });
        
    res.status(204).send();
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;

    await pacientService.deletePacient(id);
        
    res.status(204).send();
}));

router.use(errorMiddleware);

export default router();