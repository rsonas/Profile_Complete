import User from "../models/users.model.js";

//adds new user
export const addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        const data = {
            ...user.toObject(),
            id: user._id
            
        };

        delete data._id;
        delete data.__v;

        res.status(201).json ({
            success: true,
            message: "User added successfully",
            data
        });
    } catch (err) {
        next(err);
    }
};

//retrieves all users created
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        const data = users.map(user => {
            const obj = user.toObject();
            obj.id = obj._id;
            delete obj._id;
            
            return obj;
        });

        res.json({
            success: true,
            message: "users list retrieved successfully",
            data
        });

    } catch (err) {
        next(err);
    }
};

//gets user by its id
export const getUserById = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json ({
                success: false,
                message: "User not found"
            });
        }

        const data = user.toObject();
        data.id = data._id;
        delete data._id;

        res.json({
            success: true,
            message: "User retrieved successfully",
            data
        });
    } catch (err) {
        next(err);
    }
}

//updates user by id
export const updateUser = async (req, res, next) => {
    try {

        const user = await User.findByIdAndUpdate (
            req.params.id, {
                ...req.body,
                updated: Date.now()
            }, 
            {
                new:true
            }
            
        );

        if (!user) {
            return res.status(404).json ({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            message: "User updated successfully."
        });
    }catch (err){
        next(err);
    }

}

//deletes user
export const deleteUser = async (req, res, next) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "projevt not fond"
            });
        }
        res.json({
            success: true,
            message: "User deleted successfully."
        });

    } catch (err) {
        next(err);
    }
}