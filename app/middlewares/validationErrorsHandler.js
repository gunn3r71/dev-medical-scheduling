import { validationResult } from 'express-validator';

const errorFormatter = ({ location, msg, path }) => {
  return `${location}[${path}]: ${msg}`;
};

const validateRequestMiddleware = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty())
    return next();

  const errors = result.formatWith(errorFormatter).array();

  return res.status(400).json({ errors: errors });
};

const validate = (validators) => {
  return [...validators, validateRequestMiddleware];
}

export default validate;