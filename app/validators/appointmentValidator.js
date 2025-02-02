import { body, param } from 'express-validator';

const createAppointmentValidator = () => {
    return [
        body('date').isDate().notEmpty(),
        body('doctorId').isMongoId().notEmpty(),
        body('pacientId').isMongoId().notEmpty(),
        body('reason').isString().optional()
    ]
};

const updateAppointmentValidator = () => {
    return [
        param('id').isMongoId().notEmpty(),
        body('date').isDate().notEmpty(),
        body('reason').isString().optional()
    ]
}

const validators = {
    createAppointmentValidator,
    updateAppointmentValidator
};

export default validators;