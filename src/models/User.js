import mongoose from "mongoose";
const validRoles = [1, 2];

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type: Number,
        enum: validRoles,
        default : 2
    }
}, { versionKey: false, timestamps: true})

export default mongoose.model('User', userSchema)