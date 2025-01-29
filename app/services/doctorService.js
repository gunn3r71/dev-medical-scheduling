import doctorRepository from "../infrastructure/repositories/doctorRepository.js";

const getAll = async () => {
    return await doctorRepository.getAll();
};

const getById = async (id) => {
    return await doctorRepository.getById(id);
};

const saveDoctor = async ({name, specialties, medicalRegistration, phoneNumber, email}) => {
    return await doctorRepository.saveDoctor({name, specialties, medicalRegistration, phoneNumber, email});
};

const updateDoctor = async (id, { name, specialties, phoneNumber, email}) => {
    return await doctorRepository.updateDoctor(id, { name, specialties, phoneNumber, email});
}

const deleteDoctor = async (id) => {
    return await doctorRepository.deleteDoctor(id);
}

const doctorService = {
    getAll,
    getById,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default doctorService;