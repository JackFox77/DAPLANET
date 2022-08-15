import mongoose from "mongoose"
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
    {
        name:{type:String,required:true,maxlength:25,minlength:3}
    }
)