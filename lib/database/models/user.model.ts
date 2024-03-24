import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    firstName : {type : String},
    lastName : {type : String},
    username : {type : String , required : true , unique : true},
    email : {type : String , required : true , unique : true},
    photo : {type : URL , required : true},
    clerkId : {type : String , required : true , unique : true},
    planId : {type : Number , default : 1},
    creditBelence : {type : Number , default : 10},
},{
    timestamps : true
})


const User = models?.User || model('User' , userSchema)

export default User;