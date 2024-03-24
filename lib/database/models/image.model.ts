import { Document, model, models, Schema } from "mongoose";

export interface IImage extends Document{
    title : string;
    transformation : string;
    publicId : string;
    secureUrl : string;
    width? : number;
    height? : number;
    config? : object;
    transformationUrl? : string;
    aspectRation? : string;
    color? : string;
    prompt? : string;
    author : {
        _id : string,
        firstName : string,
        lastName : String
    };
}

const ImageSchema = new Schema({
    title : {type : URL, required : true},
    transformation : {type : URL, required : true},
    publicId : {type : URL, required : true},
    secureUrl : {type : URL, required : true},
    width : {type : Number},
    height : {type : Number},
    config : {type : Object},
    transformationUrl : {type : URL},
    aspectRation : {type : String},
    color : {type : String},
    prompt : {type : String},
    author : {type : Schema.Types.ObjectId , ref : "User"}
},
{
    timestamps : true
})

const Image = models?.Image || model('Image' , ImageSchema)

export default Image;