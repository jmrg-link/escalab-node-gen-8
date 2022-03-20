const { Schema , model } = require( "mongoose" );
const { String } = Schema;

const RoleSchema = new Schema( {
    roles: {
        type: String ,
        default: 'CUSTOMER_ROLE' ,
        enum: [ 'CUSTOMER_ROLE' , 'ADMIN_ROLE' , 'OFFICE_ROLE' , 'WORKER_ROLE' ] ,
    } ,

} )
RoleSchema.methods.toJSON = function () {
    const { __v , _id , ...role } = this.toObject();
    role.id = _id;
    return role;
}

module.exports = model( "Roles" , RoleSchema );