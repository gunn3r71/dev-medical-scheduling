import { body, param } from 'express-validator';

const createDoctorValidator = () => {
    console.log('Efetuando validação de doctor');
    return [
        body('name')
            .isString()
            .isLength({ min: 3, max: 50 })
            .notEmpty({ignore_whitespace: false})
            .withMessage('Name is required'),
        body('specialties')
            .isArray({
                min: 1
            })
            .withMessage('Specialties is required'),
        body('medicalRegistration').isString().notEmpty(),
        body('phoneNumber')
            .isString()
            .isMobilePhone()
            .withMessage("Phone number is required")
            .notEmpty(),
        body('email').isEmail().notEmpty()
    ]
};

const updateDoctorValidator = () => {
    return [
        param('id').isMongoId().notEmpty(),
        body('name').isString().isLength({ min: 3, max: 50 }).notEmpty(),
        body('specialties').isArray().notEmpty(),
        body('phoneNumber').isString().notEmpty(),
        body('email').isEmail().notEmpty()
    ]
}

const validators = {
    createDoctorValidator,
    updateDoctorValidator
};

export default validators;