import { mongoose } from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    specialties: { type: Array, required: [true, 'Specialty is required'] },
    medicalRegistration: { type: String, required: [true, 'Medical registration is required'] },
    phoneNumber: { type: String, required: [true, 'Phone number is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    createdAt: { type: Date, default: Date.now }
});

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;