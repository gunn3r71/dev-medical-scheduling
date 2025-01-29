import Doctor from '../../models/doctor.js';

const getAll = async () => {
    return await Doctor.find();
};

const getById = async (id) => {
    return await Doctor.findById(id);
};

const saveDoctor = async ({name, specialties, medicalRegistration, phoneNumber, email}) => {
    const Doctor = new Doctor({name, specialties, medicalRegistration, phoneNumber, email});

    return await Doctor.save();
}

const updateDoctor = async (id, { name, specialties, phoneNumber, email}) => {
    return await Doctor.findByIdAndUpdate(id, { name, specialties, phoneNumber, email }, { new: false });
}

const deleteDoctor = async (id) => {
    return await Doctor.findByIdAndDelete(id);
}

const doctorRepository = {
    getAll,
    getById,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default doctorRepository;