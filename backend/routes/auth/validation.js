const joi = require('joi');

const registerSchema = joi.object({
    email: joi.string().min(8).max(200).required().email(),
    name: joi.string().min(3).max(150).required().pattern(new RegExp('^[a-zA-Z ]+$')),
    password: joi.string().min(6).max(50).required()
});

const loginSchema = joi.object({
    email: joi.string().min(8).max(200).required().email(),
    password: joi.string().min(6).max(50).required()
});

const editSchema = joi.object({
    email: joi.string().min(8).max(200).required().email(),
    name: joi.string().min(3).max(150).required().pattern(new RegExp('^[a-zA-Z ]+$')),
    password: joi.string().min(6).max(50).required()
});

module.exports = {
    registerSchema,
    loginSchema,
    editSchema
};