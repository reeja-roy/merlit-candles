import User from "../model/user.js";
import bcrypt from 'bcrypt'
import { json } from "express";
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(400).json({"message" : "invalid credentials"})
        }
        const hashPassword = await bcrypt.compare(password, existingUser.password)
        const token = jwt.sign(
            {
                id: existingUser. _id,
                email: existingUser.email
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "1d"
            }
        )
        return res.status(200).json({"message":"login succesfull",token})
       
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message })
    }

}

export const signup = async (req, res) => {

    try {
        const { fullName, phoneNumber, password, email } = req.body
        const user = await User.findOne({ email })
        if (user) {

            return res.status(400).json({ "message": "user already exist" })

        }
        const hashPassword = await bcrypt.hash(password, 10)
        await User.create({ fullName, phoneNumber, password: hashPassword, email })
        return res.send("user created successfully")


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message
        });
    }
}