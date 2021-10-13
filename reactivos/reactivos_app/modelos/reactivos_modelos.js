const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReactivosSchema = new Schema ({

    Materia: {type: String,required: true,max:800},
    Tema: {type: String,required: true,max:80},
    Pregunta: {type: String,required: true,max:300},
    Formula: {type: String,required: false,max:60},
    OpcionCorrecta: {type: String,required: true,max:300},
    Opcionincorrecta1: {type: String,required: true,max:300},
    Opcionincorrecta2: {type: String,required: true,max:300},
    Opcionincorrecta3: {type: String,required: true,max:300},

    


});

module.exports= mongoose.model("reactivo", ReactivosSchema );