import mongoose from "mongoose";
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 25, minlength: 3 },
        galaxyId:{}
    }
    ,
    {timestamps:true, toJSON:{virtuals:true}}
)