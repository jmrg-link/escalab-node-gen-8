const express = require( "express" );
const router = express.Router();

// [ENDPOINTS GLOBAL USER]

// [GET - READ]
// [GET] - Obtiene un solo usuario por ID
// [GET] - Perfil Usuario [ROLE | USER] : solo puede solicitarse a si mismo
// [GET] - Perfil Usuario [ROLE | "ADMIN" - "OFFICE" ] : puede solicitar cualquier informacion de user
router.get( "/user/:id" )
// [GET] - Obtiene una lista de usuarios { only - administrator }
router.get( "/users" )

// FINISH [ GET ] \\
// [************] \\

// [PUT - UPDATE]
// [PUT] - Perfil Usuario [ROLE | GUEST] : solo puede actualizarse a sí mismo datos básicos.
// [PUT] - Perfil Usuario [ROLE | "ADMIN" - "OFFICE" ] : puede actualizar [ADMIN USER - OFFICE & GUEST] puede actualizar datos básicos.
// [PUT] - Activar usuario por ID
router.put( "/user/:id/active" )
// [PUT] - Desactivar usuario por ID
router.put( "/user/:id/desactivate" )
// [PUT] - Actualizar datos básicos de usuario por ID
router.put( "/user/:id" )
// FINISH [ PUT ] \\
// [************] \\

// [POST - CREATE]
// [POST] - Crear Usuario
router.post( "/user" )
// FINISH [ POST ] \\
// [*************] \\


// [DELETE - DELETE]
router.delete( "/user/:id" )

// FINISH [ DELETE ] \\
// [***************] \\
module.exports = router;