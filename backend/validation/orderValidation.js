import Joi from 'joi'

const addOrderSchema = Joi.object().keys({
    orderItems: Joi.array().items({
        title: Joi.string().required(),
        image: Joi.string().required(),
        price: Joi.number().required(),
        project: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    user: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    shippingAddress: Joi.object().keys({
        houseNo: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        pinCode: Joi.number().required(),
        landmark: Joi.string().optional()
    }),
    payment: Joi.object().keys({
        paymentMethod: Joi.string().required(),
        paymentResult: Joi.object().keys({
            id: Joi.string().required(),
            status: Joi.string().required(),
            email_Address: Joi.string().trim().email().required()
        })
    })
})

export {
    addOrderSchema
}