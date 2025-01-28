import { Mongoose } from "mongoose";

const schema = Mongoose.Schema; 

const model = {
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: { type: String, required: [true, 'Name is required'] },
    specialties: { type: Array, required: [true, 'Specialty is required'] },
    medicalRegistration: { type: String, required: [true, 'Medical registration is required'] },
    phoneNumber: { type: String, required: [true, 'Phone number is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    createdAt: { type: Date, default: Date.now }
};

const doctorSchema = new schema(model);

const doctor = Mongoose.model('Doctors', doctorSchema);

export default doctor;