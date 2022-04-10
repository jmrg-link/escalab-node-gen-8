const User = require('../models/user')


exports.loginUser = async (req,res) => {
    const { username ,email , password} = req.body
    
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                Error: `Please check * login user & password`
            })
        }
        if( !user.status ) {
            return res.status( 400 ).json( {
                Error: `Please check email is invalid : info status - Desactivate`
            } )
        }
        res.status(200).json({
           user
        })
    } catch (error) {
        res.status(500).json({
            msg: 'internal server error : Talk to administrator',
            err:error.message,
            code:error.code
        })
        process.exit(1)
    }
}