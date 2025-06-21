import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String}
})

export default mongoose.model("User",userSchema)