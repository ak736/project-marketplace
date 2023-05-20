// const joiObjectid = require('joi-objectid');
// const Joi = require('joi').extend(joiObjectid)

// const schema = Joi.object().keys({
//     orderItems: Joi.array().items({
//         name: Joi.string().required(),
//         image: Joi.string().required(),
//         price: Joi.number().required(),
//         project: Joi.joiObjectid().required()
//     }),
//     paymentMethod: Joi.string().required(),
//     paymentResult: Joi.object().keys({
//         id: Joi.string(),
//         status: Joi.string(),
//         update_time: Joi.string(),
//         email_Address: Joi.string()
//     }),
//     price: Joi.number().required(),
// })