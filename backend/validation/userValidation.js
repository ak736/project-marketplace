import Joi from 'joi';

const userRegistrationSchema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().trim().required().min(7).max(14),
    email: Joi.string().trim().email().required()
})

const userAuthSchema = Joi.object().keys({
    password: Joi.string().trim().required().min(7).max(14),
    email: Joi.string().trim().email().required()
})


export {
    userRegistrationSchema,
    userAuthSchema
}
