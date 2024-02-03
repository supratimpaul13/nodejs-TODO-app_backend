import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticaded } from "../middlewares/auth.js";

const router = express.Router();

router.post('/new', isAuthenticaded, newTask);

router.get('/my', isAuthenticaded, getMyTask);

router
    .route('/:id')
    .put(isAuthenticaded, updateTask)
    .delete(isAuthenticaded, deleteTask);

export default router;