import { Mongoose } from "mongoose";

const schema = Mongoose.Schema; 

const model = {
    id: { type: String, required: [true, 'ID is required'] , unique: true},
    date: { type: Date, required: false },
    instructions: { type: String, required: [true, 'Instructions for prescription is required'] },
    dosage: { type: String, required: [true, 'Dosage for prescription is required'] },
    Expired: { type: Boolean, default: false },
    appointmentId: { type: String, required: [true, 'Appointment ID is required'] },
    createdAt: { type: Date, default: Date.now }
};

const prescriptionSchema = new schema(model);

const prescription = Mongoose.model('Appointment', prescriptionSchema);

export default prescription;