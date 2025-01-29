import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    date: { type: Date, required: [true, 'Appointment date is required'] },
    patientId: { type: String, required: [true, 'Patient ID is required' ] },
    doctorId: { type: String, required: [true, 'Doctor ID is required'] },
    reason: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;