// const User = require('../models/user')

const userById = async ( req , res , next ) => {
    let user = await User.findById({
        if(!user){
            return res.status(400).json({
                error: "Usuario no encontrado"
            }).exec(user)
        }
    })
    next()
}

//module.exports = {
//    userById
//}