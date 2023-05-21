import JoiObjectId from "joi-objectid";
import BaseJoi from "joi";
const Joi = BaseJoi.extend(JoiObjectId);


const projectCreateSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    user: Joi.JoiObjectId().required(),
    image: Joi.string().required(),
    brand: Joi.string().required(),
    category: Joi.string().required(),
    countInStock: Joi.number().required(),
    numReviews: Joi.number().required(),
    description: Joi.string().required(),
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

const reviewUpdateSchema = Joi.object().keys({
    rating: Joi.number().required(),
    comment: Joi.string().required()
})

export {
    projectCreateSchema,
    projectUpdateSchema,
    reviewUpdateSchema
}