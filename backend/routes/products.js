import express from "express";

import Product from "../models/Product.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router.get("/", async(req,res)=>{

    const products =
        await Product.find();

    res.json(products);
});

router.post("/", auth, admin, async(req,res)=>{

    const product =
        new Product(req.body);

    await product.save();

    res.status(201).json(product);
});

router.put("/:id", auth, admin, async(req,res)=>{

    const product =
        await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

    res.json(product);
});

router.delete("/:id", auth, admin, async(req,res)=>{

    await Product.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:"Product Deleted"
    });
});

export default router;