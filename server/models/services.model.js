import mongoose from 'mongoose'

const servicesSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

export default mongoose.model('services', servicesSchema);