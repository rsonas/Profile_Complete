import Project from "../models/projects.model.js";

//adds new project
export const addProject = async (req, res, next) => {
    try {
        const project = await Project.create(req.body);

        const data = {
            ...project.toObject(),
            id: project._id
            
        };

        delete data._id;
        delete data.__v;
        
        res.status(201).json ({
            success: true,
            message: "Project added successfully",
            data
        });
    } catch (err) {
        next(err);
    }
};

//retrieves all projects created
export const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();

        const data = projects.map(project => {
            const obj = project.toObject();
            obj.id = obj._id;
            delete obj._id;
            return obj;
        });

        res.json({
            success: true,
            message: "projects list retrieved successfully",
            data
        });

    } catch (err) {
        next(err);
    }
};

//gets project by its id
export const getProjectById = async (req, res, next) => {
    try {

        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json ({
                success: false,
                message: "Project not found"
            });
        }

        const data = project.toObject();
        data.id = data._id;
        delete data._id;

        res.json({
            success: true,
            message: "Project retrieved successfully",
            data
        });
    } catch (err) {
        next(err);
    }
}

//updates project by id
export const updateProject = async (req, res, next) => {
    try {

        const project = await Project.findByIdAndUpdate (
            req.params.id,
            req.body,
            {new: true}
        );

        if (!project) {
            return res.status(404).json ({
                success: false,
                message: "Project not found"
            });
        }

        res.json({
            success: true,
            message: "Project updated successfully."
        });
    }catch (err){
        next(err);
    }

}

//deletes project
export const deleteProject = async (req, res, next) => {
    try {

        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "projevt not fond"
            });
        }
        res.json({
            success: true,
            message: "Project deleted successfully."
        });

    } catch (err) {
        next(err);
    }
}