//se usara el patron de diseño MVC
//ejecutar todas las acciones
const Reactivo= require('../modelos/reactivos_modelos');

let response ={
    msg: " ",
    exito:true 
}
//creacion de metodo INSERT
//req todo los datos (cabeceras, petición, datos se obtendran mediante req(request))
//estos parametros se reciben desde la vista 
exports.create = function(req, res){
    let reactivo = new Reactivo({

    Materia: req.body.Materia,
    Tema: req.body.Tema,
    Pregunta: req.body.Pregunta , 
    Formula:   req.body.Formula,
    OpcionCorrecta:  req.body.OpcionCorrecta, 
    Opcionincorrecta1: req.body.Opcionincorrecta1,
    Opcionincorrecta2: req.body.Opcionincorrecta2,
    Opcionincorrecta3: req.body.Opcionincorrecta3

    })

    reactivo.save(function(err){
        if(err){
            console.error(err)
      
            response.msg = "error al guardar el reactivo"
            res.json(response)
            return;
        }

           
            response.msg = "El reactivo se guardo con exito"
            res.json(response)
        

     
        
            
    })

}

exports.find =function(req,res){

    Reactivo.find(function(err,reactivos){

        res.json(reactivos)


    })
}

exports.findOne =function(req,res){

    Reactivo.findOne({_id:req.params.id},function(err,reactivo1){

        res.json(reactivo1)


    })
}

exports.update = function (req,res){
    let reactivo = {

        Materia: req.body.Materia,
        Tema: req.body.Tema,
        Pregunta: req.body.Pregunta , 
        Formula:   req.body.Formula,
        OpcionCorrecta:  req.body.OpcionCorrecta, 
        Opcionincorrecta1: req.body.Opcionincorrecta1,
        Opcionincorrecta2: req.body.Opcionincorrecta2,
        Opcionincorrecta3: req.body.Opcionincorrecta3
        
    }
    Reactivo.findByIdAndUpdate(req.params.id,{ $set:reactivo}, function(err){

        if(err){
            console.error(err)
      
            response.msg = "Error al modificar el Reactivo"
            res.json(response)
            return;
        }

           
            response.msg = "El reactivo se actualizo con exito"
            res.json(response)
        




    })
}

exports.remove =function (req, res){

    Reactivo.findByIdAndRemove({_id: req.params.id}, function(err){

        if(err){
            console.error(err)
      
            response.msg = "Error al eliminar el Reactivo"
            res.json(response)
            return;
        }

           
            response.msg = "El reactivo se elimino con exito"
            res.json(response)

    } )

}