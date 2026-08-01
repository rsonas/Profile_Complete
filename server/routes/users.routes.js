import express from 'express'
import auth from '../middleware/auth.middleware.js';

import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/users.controller.js'

const router= express.Router();

//routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", auth, addUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;