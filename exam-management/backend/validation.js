const Joi = require('@hapi/joi');

// Registation Validation
const registerValidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        role: Joi.string().required()
    };

    return Joi.validate(data, schema);
};

// Login Validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };

    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;