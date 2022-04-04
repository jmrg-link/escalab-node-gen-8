const { Schema , model } = require( "mongoose" );

const RoleSchema = new Schema( {
    role: {
        type: String,
        require:[true,'Role is required'],
        trim:true,
    } ,
} )

RoleSchema.methods.toJSON = function () {
    const { __v , _id , ...role } = this.toObject();
    role.id = _id;
    return role;
}

module.exports = model( "Roles" , RoleSchema );