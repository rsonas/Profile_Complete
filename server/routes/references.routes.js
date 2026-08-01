import express from 'express'
import auth from '../middleware/auth.middleware.js';

import { addReferences, getAllReferencess, getReferencesById, updateReferences, deleteReferences } from '../controllers/references.controller.js'

const router= express.Router();

//routes
router.get("/", getAllReferencess);
router.get("/:id", getReferencesById);
router.post("/", auth, addReferences);
router.put("/:id", auth, updateReferences);
router.delete("/:id", auth, deleteReferences);

export default router;