import Appointment from '../../models/appointment.js';
import Doctor from '../../models/doctor.js';
import Pacient from '../../models/pacient.js';

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
    const doctorExists = await Doctor.findById(doctorId);
    const pacientExists = await Pacient.findById(pacientId);

    if (!doctorExists || !pacientExists) {
        throw new Error('Doctor or Pacient not found');
    }

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