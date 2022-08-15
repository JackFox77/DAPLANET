import mongoose from "mongoose"
const Schema = mongoose.Schema

export const MoonSchema = new Schema(
    {
        name:{type:String, required:true,maxlength:25,minlength:3}
    },
    {timestamps:true, toJSON:{virtuals:true}}
)