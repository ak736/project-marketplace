import Joi from "joi";

const reviewUpdateSchema = Joi.object().keys({
    name: Joi.string().required(),
    rating: Joi.number().required(),
    comment: Joi.string().required()
})

const projectCreateSchema = Joi.object().keys({
    title: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    user:  Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    image: Joi.string().required(),
    brand: Joi.string().required(),
    category: Joi.string().required(),
    countInStock: Joi.number().required(),
    numReviews: Joi.number().required(),
    description: Joi.string().required(),
    techStack: Joi.string().required(),
    features: Joi.string().required(),
    rating: Joi.number().required()
})

const projectUpdateSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    brand: Joi.string().required(),
    category: Joi.string().required(),
    countInStock: Joi.number().required()
})



export {
    projectCreateSchema,
    projectUpdateSchema,
    reviewUpdateSchema
}