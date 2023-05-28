import mongoose from 'mongoose'

const addToCardSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        project: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ]
  },
  {
    timestamps: true,
  }
)

const addToCard = mongoose.model('addToCard', addToCardSchema)

export default addToCard