import { Mongoose } from "mongoose";

const schema = Mongoose.Schema; 

const model = {
    id: { type: String, required: [true, 'ID is required'], unique: true },
    date: { type: Date, required: [true, 'Appointment date is required'] },
    patientId: { type: String, required: [true, 'Patient ID is required' ] },
    doctorId: { type: String, required: [true, 'Doctor ID is required'] },
    reason: { type: String, required: [true, 'Reason for appointment is required'] },
    createdAt: { type: Date, default: Date.now }
};

const appointmentSchema = new schema(model);

const appointment = Mongoose.model('Appointments', appointmentSchema);

export default appointment;