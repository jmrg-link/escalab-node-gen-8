const mongoose = require( "mongoose" );
const { ObjectId , Array , String , Number } = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String ,
            trim: true ,
            required: true ,
            maxlength: [ 16 , "Max 16 letters" ] ,
            minlength: [ 3 , "Min 3 letters" ] ,
        } ,
        name: {
            type: String ,
            minlength: [ 3 , "Min 3 letters" ] ,
            maxlength: [ 16 , "Max 16 letters" ] ,
            trim: true ,
            required: [ true , "name is required" ] ,
        } ,
        lastname: {
            type: String ,
            minlength: [ 3 , "Min 3 letters" ] ,
            maxlength: [ 16 , "Max 16 letters" ] ,
            trim: true ,
            required: [ true , "lastname is required" ] ,
        } ,
        email: {
            type: String ,
            required: [ true , "Email is required" ] ,
            index: true ,
            minlength: [ 3 , "Min 3 letters" ] ,
            maxlength: [ 16 , "Max 16 letters" ] ,
            trim: true ,
        } ,
        status: {
            type: [] ,
            required: [ true , "Status is required" ] ,
            default: "Active" ,
            enum: [ "Active" , "Inactive" ] ,
        } ,
        images: {
            type: Array ,
            trim: true ,
        } ,
        password: {
            type: String ,
            required: true ,
            trim: true ,
            maxlength: [ 22 , 'Max 22 letters' ]
        } ,
        phone: {
            type: Number ,
            maxlength: 16 ,
            trim: true ,
        } ,
        select_role: {
            custom: { type: ObjectId , ref: 'Roles' } ,
            required: [ true , 'Select Role is required' ]
        } ,
    } ,
    {
        timestamps: true ,
    }
);

module.exports = mongoose.model( "User" , userSchema );