const { Schema, model } = require('mongoose');

const validateEmail = (email) => {
    const resp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return resp.test(email)
    
}

const UserSchema = new Schema({
        username: {
            type: String ,
            trim: true ,
            unique:true,
            required: true ,
            minlength: [ 3 , "Max 3 letters" ] ,
            maxlength: [ 16 , "Min 16 letters" ] ,
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
            index: { unique: true },
            lowercase: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
            minlength: [ 3 , "Min 3 letters" ] ,
            maxlength: [ 32 , "Max 16 letters" ] ,
            trim: true ,
        } ,
        status: {
            type: String ,
            required: [ true , "Status is required" ] ,
            default: "Active" ,
            enum: [ "Active" , "Inactive" ] 
        } ,
        images: {
            type: [String] ,
            trim: true ,
        } ,
        password: {
            type: String ,
            required: true ,
            trim: true ,
            maxlength: [ 60 , 'Max 60 letters' ]
        } ,
        phone: {
            type: Number ,
            maxlength: 16 ,
            trim: true ,
        } ,
        role: {
            type:String,
            default: 'CUSTOMER_ROLE' ,
            enum: [ 'CUSTOMER_ROLE' , 'ADMIN_ROLE' , 'OFFICE_ROLE' , 'WORKER_ROLE' ],
            required: true,
        } ,
    } ,
    {
        timestamps: true ,
    }
)

UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model( "User" , UserSchema );