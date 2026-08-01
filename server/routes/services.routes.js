import express from 'express'
import auth from '../middleware/auth.middleware.js';

import { addService, getAllServices, getServiceById, updateService, deleteService } from '../controllers/services.controller.js'

const router= express.Router();

//routes
router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", addService);
router.put("/:id", auth, updateService);
router.delete("/:id", auth, deleteService);

export default router;