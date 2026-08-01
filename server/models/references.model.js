import mongoose from 'mongoose'

const referencesSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true
    },
    testimonial: {
        type: String,
        trim: true
    },
    position: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
});

export default mongoose.model('references', referencesSchema);