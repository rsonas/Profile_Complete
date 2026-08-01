import express from 'express';
import auth from '../middleware/auth.middleware.js';

import { addProject, getAllProjects, getProjectById, updateProject, deleteProject } from '../controllers/projects.controller.js'

const router= express.Router();

//routes
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", auth, addProject);
router.put("/:id", auth, updateProject);
router.delete("/:id", auth, deleteProject);

export default router;