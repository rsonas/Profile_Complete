import References from "../models/references.model.js";

//adds new references
export const addReferences = async (req, res, next) => {
    try {
        const references = await References.create(req.body);

        const data = {
            ...references.toObject(),
            id: references._id
            
        };

        delete data._id;
        delete data.__v;
        
        res.status(201).json ({
            success: true,
            message: "References added successfully",
            data
        });
    } catch (err) {
        next(err);
    }
};

//retrieves all referencess created
export const getAllReferencess = async (req, res, next) => {
    try {
        const referencess = await References.find();

        const data = referencess.map(references => {
            const obj = references.toObject();
            obj.id = obj._id;
            delete obj._id;
            return obj;
        });

        res.json({
            success: true,
            message: "referencess list retrieved successfully",
            data
        });

    } catch (err) {
        next(err);
    }
};

//gets references by its id
export const getReferencesById = async (req, res, next) => {
    try {

        const references = await References.findById(req.params.id);

        if (!references) {
            return res.status(404).json ({
                success: false,
                message: "References not found"
            });
        }

        const data = references.toObject();
        data.id = data._id;
        delete data._id;

        res.json({
            success: true,
            message: "References retrieved successfully",
            data
        });
    } catch (err) {
        next(err);
    }
}

//updates references by id
export const updateReferences = async (req, res, next) => {
    try {

        const references = await References.findByIdAndUpdate (
            req.params.id,
            req.body,
            {new: true}
        );

        if (!references) {
            return res.status(404).json ({
                success: false,
                message: "References not found"
            });
        }

        res.json({
            success: true,
            message: "References updated successfully."
        });
    }catch (err){
        next(err);
    }

}

//deletes references
export const deleteReferences = async (req, res, next) => {
    try {

        const references = await References.findByIdAndDelete(req.params.id);

        if (!references) {
            return res.status(404).json({
                success: false,
                message: "projevt not fond"
            });
        }
        res.json({
            success: true,
            message: "References deleted successfully."
        });

    } catch (err) {
        next(err);
    }
}