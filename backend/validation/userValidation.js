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

const userUpdateSchema = Joi.object().keys({
    name: Joi.string().required(),
    isAdmin: Joi.string().trim().optional(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().optional().min(7).max(14)
})



export {
    userRegistrationSchema,
    userAuthSchema,
    userUpdateSchema
}
