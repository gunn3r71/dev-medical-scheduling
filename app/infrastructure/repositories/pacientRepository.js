import Pacient from '../../models/pacient.js';

const getAll = async () => {
    return await Pacient.find();
};

const getById = async (id) => {
    return await Pacient.findById(id);
};

const savePacient = async ({ name, birthDate, lastMedicalAppointment, phoneNumber, email }) => {
    const Pacient = new Pacient({ name, birthDate, lastMedicalAppointment, phoneNumber, email });

    return await Pacient.save();
}

const updatePacient = async (id, { name, birthDate, lastMedicalAppointment, phoneNumber, email }) => {
    return await Pacient.findByIdAndUpdate(id, { name, birthDate, lastMedicalAppointment, phoneNumber, email }, { new: false });
}

const deletePacient = async (id) => {
    return await Pacient.findByIdAndDelete(id);
}

const pacientRepository = {
    getAll,
    getById,
    savePacient,
    updatePacient,
    deletePacient
};

export default pacientRepository;