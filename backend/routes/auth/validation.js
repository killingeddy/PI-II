const joi = require('joi');

const registerSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    name: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(30).required()
});

const loginSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(30).required()
});

const editSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    name: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(30).required()
});

module.exports = {
    registerSchema,
    loginSchema,
    editSchema
};