import { User } from "../models/users.js";
import jwt from "jsonwebtoken";


export const isAuthenticaded = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Login First",
        })
    }

    const decoded = jwt.verify(token, process.env.JET_SECRET);
    req.user = await User.findById(decoded._id);

    next();
}