import mongoose from 'mongoose'

//will add role to assignment 4 when we add authentication
const userSchema = new mongoose.Schema({

    fName: {
        type: String,
        trim: true
    },
    lName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        trim:true
    },
    salt: String

});

export default mongoose.model('users', userSchema);