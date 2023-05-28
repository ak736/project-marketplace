import asyncHandler from "express-async-handler";
import addToCard from "../models/addToCardModel.js";

// @desc add item in card
// @route PUT /api/addToCard
// @access Private

export const addToCardOrderItems = asyncHandler(async (req, res) => {
    try {
        const {
            orderItems
        } = req.body;

        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error("No order items");
        } else {

            const orderList = await addToCard.findOneAndUpdate({ user: req.user._id }, {
                $push: {
                    orderItems: orderItems
                }
            }, { new: true });

            if (orderList) {
                return res.json({ orders: orderList.orderItems }).status(201)
            } else {
                const order = new addToCard({
                    orderItems: orderItems,
                    user: req.user._id
                });

                const createdOrder = await order.save()

                res.status(200).json({ orders: createdOrder.orderItems });
            }
        }
    } catch (err) {
        return res.status(404).json({ error: err.message });
    }
});

// @desc   Get addToCard user order
// @route  GET /api/addToCard
// @access Private

export const getAddToCardOrder = asyncHandler(async (req, res) => {
    const getOrderList = await addToCard.findOne({user: req.user._id})
    if (getOrderList) {
        res.json({orders: getOrderList.orderItems});
    } else {
        res.status(404);
        throw new Error("Add To Card Order Not Found!!")
    }
});




