import mongoose from 'mongoose'

const projectsSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
    },
    completion: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
});

export default mongoose.model('projects', projectsSchema);