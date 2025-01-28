import express from 'express';
import appointmentController from '../controllers/appointmentController.js';
import doctorController from '../controllers/doctorController.js';
import pacientController from '../controllers/pacientController.js';
import prescriptionController from '../controllers/prescriptionController.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.info('GET /');
    res.status(200).json({ message: 'Hello, world!' });
});

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;