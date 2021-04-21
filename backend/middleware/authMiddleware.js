import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
// A Middleware Function
const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // [bearer, token]
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            console.log(req.user = await User.findById(decoded.id).select('-password')
            )
            next()
        } catch (error) {
            console.error("Something went wrong with authentication:", error)
            res.status(401)
            throw new Error("Not Authroized, token failed")
        }
    }
    if (!token) {
        res.status(401)
        throw new Error("Not Authroized, no token.")
    }
})

export { protect };