import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { addOrderSchema } from "../validation/orderValidation.js"

// @desc Create new order
// @route POST /api/orders
// @access Private

export const addOrderItems = asyncHandler(async (req, res) => {
  const payload = await addOrderSchema.validateAsync(req.body);
  if (!payload.error) {
    const {
      orderItems,
      shippingAddress,
      paymentMethod
    } = payload;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
    } else {
      const price = orderItems.reduce((accumulator, current) => {return accumulator + current.price}, 0)
      const taxPrice = (price * 18)/100;
      const shippingPrice = 25;
      const totalPrice = price + taxPrice + shippingPrice
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        price,
        taxPrice,
        shippingPrice,
        totalPrice,
        user: req.user._id
      });

      const createdOrder = await order.save()

      res.status(201).json(createdOrder)
    }
  }
});

// @desc Get order details
// @route GET /api/orders/:id
// @access Private

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user", 'name email')
  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Order Not Found!!")
  }
});

// @desc   Get logged in user orders
// @route  GET /api/orders/myorders
// @access Private

export const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
});




