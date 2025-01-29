import appointmentRepository from "../infrastructure/repositories/appoinmentRepository.js";

const getAll = async () => {
    return await appointmentRepository.getAll();
};

const getById = async (id) => {
    return await appointmentRepository.getById(id);
};

const getByDoctorId = async (doctorId) => {
    return await appointmentRepository.getByDoctorId(doctorId);
};

const getByPacientId = async (pacientId) => {
    return await appointmentRepository.getByPacientId(pacientId);
}

const saveAppointment = async ({pacientId, doctorId, date, reason}) => {
    return await appointmentRepository.saveAppointment({pacientId, doctorId, date, reason});
};

const updateAppointment = async (id, {date, reason}) => {
    return await appointmentRepository.updateAppointment(id, {date, reason});
}

const deleteAppointment = async (id) => {
    return await appointmentRepository.deleteAppointment(id);
}

const appointmentService = {
    getAll,
    getById,
    getByDoctorId,
    getByPacientId,
    saveAppointment,
    updateAppointment,
    deleteAppointment
};

export default appointmentService;