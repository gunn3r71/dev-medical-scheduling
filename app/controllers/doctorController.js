import express from 'express';
import doctorService from '../services/doctorService.js';
import errorMiddleware from '../middlewares/errorHandler.js';
import asyncHandler from '../middlewares/asyncHandler.js';

let router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const doctors = await doctorService.getAll();
    res.status(200).json(doctors);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const doctor = await doctorService.getById(id);

    if(doctor) {
        res.status(200).json(doctor);
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }
}));

router.post('/', async (req, res) => {
    const { name, specialties, medicalRegistration, phoneNumber, email }  = req.body;

    const doctor = await doctorService.saveDoctor({ name, specialties, medicalRegistration, phoneNumber, email });
    res.status(201).json(doctor);
});

router.put('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, specialties, phoneNumber, email} = req.body;

    await doctorService.updateDoctor(id, { name, specialties, phoneNumber, email});
        
    res.status(204).send();
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;

    await doctorService.deleteDoctor(id);
        
    res.status(204).send();
}));

router.use(errorMiddleware);

export default router();