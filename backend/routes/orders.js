import express from "express";

import Order from "../models/Order.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async(req,res)=>{

    const orders =
        await Order.find({
            userId:req.user.id
        });

    res.json(orders);
});

router.post("/", auth, async(req,res)=>{

    const order =
        new Order({

            userId:req.user.id,

            products:req.body.products,

            totalAmount:req.body.totalAmount

        });

    await order.save();

    res.status(201).json(order);
});

export default router;