const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema ({

    usuario: {type: String,required: true,max:100},
    pass: {type: String,required: true,max:128}
   // Nombre: {type: String,required: true,max:200},
   // Boleta: {type: String,required: true,max:20},
    //Tipo: {type: String,required: true,max:30}, 
});

module.exports= mongoose.model("usuarios", UsuariosSchema );

