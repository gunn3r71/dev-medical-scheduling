import { body, param } from 'express-validator';

//name, birthDate, lastMedicalAppointment, phoneNumber, email
const createPacientValidator = () => {
    return [
        body('name').isString().isLength({ min: 3, max: 50 }).notEmpty(),
        body('birthDate').isDate().notEmpty(),
        body('lastMedicalAppointment').isDate().optional(),
        body('phoneNumber').isString().notEmpty(),
        body('email').isEmail().notEmpty()
    ]
};

const updatePacientValidator = () => {
    return [
        param('id').isMongoId().notEmpty(),
        body('name').isString().isLength({ min: 3, max: 50 }).notEmpty(),
        body('birthDate').isDate().notEmpty(),
        body('lastMedicalAppointment').isDate().optional(),
        body('phoneNumber').isString().notEmpty(),
        body('email').isEmail().notEmpty()
    ]
}

const validators = {
    createPacientValidator,
    updatePacientValidator
};

export default validators;