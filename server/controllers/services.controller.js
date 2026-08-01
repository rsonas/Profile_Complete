import Service from "../models/services.model.js";

//adds new service
export const addService = async (req, res, next) => {
    try {
        const service = await Service.create(req.body);

        const data = {
            ...service.toObject(),
            id: service._id
            
        };

        delete data._id;
        delete data.__v;
        
        res.status(201).json ({
            success: true,
            message: "Service added successfully",
            data
        });
    } catch (err) {
        next(err);
    }
};

//retrieves all services created
export const getAllServices = async (req, res, next) => {
    try {
        const services = await Service.find();

        const data = services.map(service => {
            const obj = service.toObject();
            obj.id = obj._id;
            delete obj._id;
            return obj;
        });

        res.json({
            success: true,
            message: "services list retrieved successfully",
            data
        });

    } catch (err) {
        next(err);
    }
};

//gets service by its id
export const getServiceById = async (req, res, next) => {
    try {

        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json ({
                success: false,
                message: "Service not found"
            });
        }

        const data = service.toObject();
        data.id = data._id;
        delete data._id;

        res.json({
            success: true,
            message: "Service retrieved successfully",
            data
        });
    } catch (err) {
        next(err);
    }
}

//updates service by id
export const updateService = async (req, res, next) => {
    try {

        const service = await Service.findByIdAndUpdate (
            req.params.id,
            req.body,
            {new: true}
        );

        if (!service) {
            return res.status(404).json ({
                success: false,
                message: "Service not found"
            });
        }

        res.json({
            success: true,
            message: "Service updated successfully."
        });
    }catch (err){
        next(err);
    }

}

//deletes service
export const deleteService = async (req, res, next) => {
    try {

        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "projevt not fond"
            });
        }
        res.json({
            success: true,
            message: "Service deleted successfully."
        });

    } catch (err) {
        next(err);
    }
}