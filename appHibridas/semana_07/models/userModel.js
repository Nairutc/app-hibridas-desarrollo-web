import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        require: true,
        trim: true
        },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
        },
    password:{
        type: String,
        require : true
    },
    role:{
        type: String,
        enum:["user", "admin", "teacher"],
        default: "user"
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

const modelUser = mongoose.model("users", userSchema);

export default modelUser;

