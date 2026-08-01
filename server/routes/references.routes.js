import express from 'express'

import { addReferences, getAllReferencess, getReferencesById, updateReferences, deleteReferences } from '../controllers/references.controller.js'

const router= express.Router();

//routes
router.get("/", getAllReferencess);
router.get("/:id", getReferencesById);
router.post("/", addReferences);
router.put("/:id", updateReferences);
router.delete("/:id", deleteReferences);

export default router;