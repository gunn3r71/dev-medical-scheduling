import PacientRepository from "../infrastructure/repositories/pacientRepository.js";

const getAll = async () => {
    return await PacientRepository.getAll();
};

const getById = async (id) => {
    return await PacientRepository.getById(id);
};

const savePacient = async ({ name, birthDate, lastMedicalAppointment, phoneNumber, email }) => {
    return await PacientRepository.savePacient({ name, birthDate, lastMedicalAppointment, phoneNumber, email });
};

const updatePacient = async (id, { name, birthDate, lastMedicalAppointment, phoneNumber, email }) => {
    return await PacientRepository.updatePacient(id, { name, birthDate, lastMedicalAppointment, phoneNumber, email });
}

const deletePacient = async (id) => {
    return await PacientRepository.deletePacient(id);
}

const PacientService = {
    getAll,
    getById,
    savePacient,
    updatePacient,
    deletePacient
};

export default PacientService;