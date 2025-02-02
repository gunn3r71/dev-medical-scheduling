import Prescription from "../../models/prescription.js";
import Appointment from "../../models/appointment.js";

const getAll = async () => {
    return await Prescription.find();
};

const getById = async (id) => {
    return await Prescription.findById(id);
};

const savePrescription = async ({ date, instructions, dosage, expired, appointmentId }) => {
    const appointmetnExists = await Appointment.findById(appointmentId);

    if(!appointmetnExists) {
        throw new Error('Appointment not found');
    }

    const prescription = new Prescription({ date, instructions, dosage, expired, appointmentId });

    return await prescription.save();
}

const updatePrescription = async (id, { date, instructions, dosage, expired }) => {
    return await Prescription.findByIdAndUpdate(id, { date, instructions, dosage, expired }, { new: false });
}

const prescriptionRepository = {
    getAll,
    getById,
    savePrescription,
    updatePrescription
};

export default prescriptionRepository;