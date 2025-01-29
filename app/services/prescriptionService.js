import prescriptionRepository from "../infrastructure/repositories/prescriptionRepository.js";

const getAll = async () => {
    return await prescriptionRepository.getAll();
};

const getById = async (id) => {
    return await prescriptionRepository.getById(id);
};

const savePrescription = async ({ date, instructions, dosage, Expired, appointmentId }) => {
    return await prescriptionRepository.savePrescription({ date, instructions, dosage, Expired, appointmentId });
};

const updatePrescription = async (id, { date, instructions, dosage, Expired }) => {
    return await prescriptionRepository.updatePrescription(id, { date, instructions, dosage, Expired });
}

const prescriptionService = {
    getAll,
    getById,
    savePrescription,
    updatePrescription
};

export default prescriptionService;