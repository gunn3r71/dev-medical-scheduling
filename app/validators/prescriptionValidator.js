import { body, param } from 'express-validator';

const createPrescriptionValidator = () => {
    return [
        body('date').isDate().notEmpty(),
        body('instructions').isString().optional(),
        body('dosage').isString().notEmpty(),
        body('expired').isBoolean().optional(),
        body('appointmentId').isMongoId().notEmpty()
    ]
};

const updatePrescriptionValidator = () => {
    return [
        param('id').isMongoId().notEmpty(),
        body('instructions').isString().optional(),
        body('dosage').isString().notEmpty(),
        body('expired').isBoolean().optional()
    ]
}

const validators = {
    createPrescriptionValidator,
    updatePrescriptionValidator
};

export default validators;