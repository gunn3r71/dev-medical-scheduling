import { mongoose } from "mongoose";

const prescriptionSchema = new mongoose.Schema({
    date: { type: Date, required: false },
    instructions: { type: String, required: false },
    dosage: { type: String, required: [true, 'Dosage for prescription is required'] },
    expired: { type: Boolean, default: false },
    appointmentId: { type: String, required: [true, 'Appointment ID is required'] },
    createdAt: { type: Date, default: Date.now }
});

const prescription = mongoose.model('Prescription', prescriptionSchema);

export default prescription;