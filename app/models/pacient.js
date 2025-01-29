import { mongoose } from "mongoose";

const pacientSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    birthDate: { type: Date, required: [true, 'Birth date is required'] },
    lastMedicalAppointment: { type: Date, required: false },
    phoneNumber: { type: String, required: [true, 'Phone number is required'] },
    email: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient;