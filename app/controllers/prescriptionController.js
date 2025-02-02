import express from 'express';
import prescriptionService from '../services/prescriptionService.js';
import validators from '../validators/prescriptionValidator.js';
import errorMiddleware from '../middlewares/errorHandler.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import validate from '../middlewares/validationErrorsHandler.js';

let router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const prescriptions = await prescriptionService.getAll();
    res.status(200).json(prescriptions);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const prescription = await prescriptionService.getById(id);

    if(prescription) {
        res.status(200).json(prescription);
    } else {
        res.status(404).json({ message: 'Prescription not found' });
    }
}));

router.post('/', validate(validators.createPrescriptionValidator()), asyncHandler(async (req, res) => {
    const { date, instructions, dosage, Expired, appointmentId }  = req.body;

    const prescription = await prescriptionService.savePrescription({ date, instructions, dosage, Expired, appointmentId });
    res.status(201).json(prescription);
}));

router.put('/:id', validate(validators.updatePrescriptionValidator()), asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { date, instructions, dosage, Expired } = req.body;

    await prescriptionService.updatePrescription(id, { date, instructions, dosage, Expired });
        
    res.status(204).send();
}));

router.use(errorMiddleware);

export default router;