import express from 'express'

import { addProject, getAllProjects, getProjectById, updateProject, deleteProject } from '../controllers/projects.controller.js'

const router= express.Router();

//routes
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", addProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;