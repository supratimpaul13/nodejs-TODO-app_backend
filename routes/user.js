import express from "express";
import {
    getMyProfile,
    login,
    logout,
    register,
} from "../controllers/user.js";
import { isAuthenticaded } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticaded, getMyProfile);

export default router;