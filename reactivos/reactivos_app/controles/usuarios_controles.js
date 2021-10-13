//se usara el patron de diseño MVC

const Usuario= require('../modelos/usuarios_modelos');
const crypto= require("crypto");
const jwt = require("jsonwebtoken")

exports.login = function(req,res,next){
    //consultamos al usuario
    let hashedPass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({usuario:req.body.usuario, pass:hashedPass},function(err,usuario){

        let response={
            token:null
        }//si existe el usuario se le da un token  de autentificación
        if(usuario !== null){
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "secret")
        }
        res.json(response);
    })

}