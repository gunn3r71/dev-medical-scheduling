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

const rescheduleAppointment = async (id, date) => {
    if (date <= new Date()) {
        throw new Error('Date must be in the future');
    }
    
    let appointment = await getById(id);

    if(!appointment) {
        throw new Error('Appointment not found');
    }

    await updateAppointment(id, { date } );

    return await appointmentRepository.updateAppointment(id, {date});
}

const appointmentService = {
    getAll,
    getById,
    getByDoctorId,
    getByPacientId,
    saveAppointment,
    updateAppointment,
    deleteAppointment,
    rescheduleAppointment
};

export default appointmentService;