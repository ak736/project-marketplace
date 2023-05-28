import express from "express";
const router = express.Router();
import {getAddToCardOrder, addToCardOrderItems} from "../controllers/addToCardController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect,getAddToCardOrder);
router.route("/").put(protect,addToCardOrderItems);

export default router;
