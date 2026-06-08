import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = express.Router();

router.post("/register", async(req,res)=>{

    try{

        const {
            username,
            email,
            password,
            role
        } = req.body;

        const existing =
            await User.findOne({email});

        if(existing){

            return res.status(400).json({
                message:"User already exists"
            });

        }

        const hashedPassword =
            await bcrypt.hash(password,10);

        const user = new User({
            username,
            email,
            password:hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({
            message:"User Registered"
        });

    }catch(err){

        res.status(500).json({
            error:err.message
        });

    }

});

router.post("/login", async(req,res)=>{

    try{

        const {
            email,
            password
        } = req.body;

        const user =
            await User.findOne({email});

        if(!user){

            return res.status(400).json({
                message:"User not found"
            });

        }

        const valid =
            await bcrypt.compare(
                password,
                user.password
            );

        if(!valid){

            return res.status(400).json({
                message:"Invalid Password"
            });

        }

        const token =
            jwt.sign(
                {
                    id:user._id,
                    role:user.role
                },
                "secretkey",
                {
                    expiresIn:"1d"
                }
            );

        res.json({token});

    }catch(err){

        res.status(500).json({
            error:err.message
        });

    }

});

export default router;