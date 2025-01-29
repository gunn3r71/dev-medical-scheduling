import Appointment from '../../models/appointment.js';

const getAll = async () => {
    return await Appointment.find();
};

const getById = async (id) => {
    return await Appointment.findById(id);
};

const getByDoctorId = async (doctorId) => {
    return await Appointment.find({ doctorId: doctorId});
};

const getByPacientId = async (pacientId) => {
    return await Appointment.find({ pacientId: pacientId}); 
};

const saveAppointment = async ({ date, doctorId, pacientId, reason}) => {
    const appointment = new Appointment({ date, doctorId, pacientId, reason });

    return await appointment.save();
}

const updateAppointment = async (id, { date, reason }) => {
    return await Appointment.findByIdAndUpdate(id, { date, reason }, { new: false });
}

const deleteAppointment = async (id) => {
    return await Appointment.findByIdAndDelete(id);
}

const appointmentRepository = {
    getAll,
    getById,
    getByDoctorId,
    getByPacientId,
    saveAppointment,
    updateAppointment,
    deleteAppointment
};

export default appointmentRepository;