import express from 'express'

import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/users.controller.js'

const router= express.Router();

//routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;