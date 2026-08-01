import User from "../models/users.model.js";
import jwt from "jsonwebtoken";

//validates users login info
export async function signin(req,res){

    try {

        const user = await User.findOne({
            email:req.body.email
        });

        //checks if user exists
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not found"
            });
        }

        //checks if password is correct
        if(!user.authenticate(req.body.password)){
            return res.status(401).json({
                success:false,
                message:"Invalid password"
            });
        }

        // creates token
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        );

        return res.json({
            success:true,
            token,
            user:{
                id:user._id,
                email:user.email
            }
        });

    }
    catch(error){

        console.log(error);

        return res.status(500).json({
            success:false,
            message:error.message
        });

    }
}