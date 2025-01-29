import Prescription from "../../models/prescription.js";

const getAll = async () => {
    return await Prescription.find();
};

const getById = async (id) => {
    return await Prescription.findById(id);
};

const savePrescription = async ({ date, instructions, dosage, Expired, appointmentId }) => {
    const Prescription = new Prescription({ date, instructions, dosage, Expired, appointmentId });

    return await Prescription.save();
}

const updatePrescription = async (id, { date, instructions, dosage, Expired }) => {
    return await Prescription.findByIdAndUpdate(id, { date, instructions, dosage, Expired }, { new: false });
}

const prescriptionRepository = {
    getAll,
    getById,
    savePrescription,
    updatePrescription
};

export default prescriptionRepository;