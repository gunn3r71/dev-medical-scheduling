import { Mongoose } from "mongoose";

const schema = Mongoose.Schema; 

const model = {
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: { type: String, required: [true, 'Name is required'] },
    lastMedicalAppointment: { type: Date, required: false },
    phoneNumber: { type: String, required: [true, 'Phone number is required'] },
    email: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
};

const pacientSchema = new schema(model);

const pacient = Mongoose.model('Pacients', pacientSchema);

export default pacient;