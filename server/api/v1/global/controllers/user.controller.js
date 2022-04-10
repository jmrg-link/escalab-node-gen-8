const User = require( "../models/user" );
const bcryptjs = require( "bcryptjs" );

exports.createUser = async ( req , res ) => {
    try {
        const { username , name , lastname , password , email , role } = req.body;
        const user = new User( { username , name , lastname , password , email , role } );

        // encrypt password -> user.password (10 salt)
        const salt = bcryptjs.genSaltSync( 10 );
        user.password = bcryptjs.hashSync( password , salt );

        await user.save();
        res.status( 201 ).json( {
            user ,
            msg: `User created ${ username } with email ${ email }` ,
        } );
    } catch ( error ) {
        res.status( 400 ).json( {
            err: error.message ,
            code: error.code ,
        } );
    }
};

exports.findAllUser = async ( req , res ) => {
    const { limit = 5 , from = 0 } = req.query;
    const query = { status: "Active" };
    try {
        const [ total , users ] = await Promise.all( [
            User.countDocuments( query ) ,
            User.find( query ).limit( Number( limit ) ).skip( Number( from ) ) ,
        ] );
        res.status( 200 ).json( {
            total ,
            users ,
        } );
    } catch ( error ) {
        res.status( 400 ).json( {
            err: error.message ,
            code: error.code ,
        } );
    }
};

exports.findUser = async ( req , res ) => {
    try {
        const { id } = req.params;
        const user = await User.findById( id );
        res.status( 200 ).json( {
            msg: `Is userId ${ id }` ,
            user ,
        } );
    } catch ( error ) {
        res.status( 400 ).json( {
            err: error.message ,
            code: error.code ,
        } );
    }
};

exports.updateUser = async ( req , res ) => {
    try {
        const { id } = req.params;
        const { _id , password , email , username , ...rest } = req.body;
        if ( password ) {
            // encrypt password -> user.password (10 salt)
            const salt = bcryptjs.genSaltSync( 10 );
            rest.password = bcryptjs.hashSync( password , salt );
        }
        const user = await User.findByIdAndUpdate( id , rest , { new: true } );
        res.status( 202 ).json( {
            msg: `Changes is userId:${ id } changes modified` ,
            user ,
        } );
    } catch ( error ) {
        res.status( 400 ).json( {
            err: error.message ,
            code: error.code ,
        } );
    }
};
