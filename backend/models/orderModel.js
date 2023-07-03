import mongoose from 'mongoose'

const shipmentSchema = mongoose.Schema({
    houseNo: {type: Number},
    street: {type:String},
    city: {type: String},
    state: {type: String},
    pinCode: {type: Number},
    landmark: {type: String}
});

const paymentSchema = mongoose.Schema({
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String},
    status: { type: String},
    update_time: { type: Date, default: Date.now()},
    email_Address: { type: String}
  }
})

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        title: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        project: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      default: 0.0
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    shippingAddress: shipmentSchema,
    payment: paymentSchema
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order