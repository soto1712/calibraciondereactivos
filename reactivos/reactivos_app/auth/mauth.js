//barrera que estara verificando cada token que entrara al servidor
const jwt = require("jsonwebtoken");


const auth = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token,"secret")
     
        req.usuario = decoded 
        next()
    
    }catch(error){
    
        res.status(401)
        res.json({code: 4, msg:"no tienes permiso para acceder"})
    }


}

module.exports = auth

//secret es la contraseña de la llave privada