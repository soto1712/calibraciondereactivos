import React from 'react'
import '../App.css';

function altareactivo() {
    return (
        <div className="alta-imagen">
        <div className="container"><br/><br/>
            <h1>Alta de Reactivo</h1> <hr/><br/>
        <div className="row">
            
        <div className="col-2">

        <p className="p"> Escribe tu Pregunta</p><br/><br/>
         <p className="p"> Formula</p><br/>
        
   
         <p className="p">Tema</p><br/><br/>
         <p className="p"> Materia</p><br/><br/>
        
         <p className="p"> Opcion correcta</p><br/><br/>
         <p className="p"> Opcion incorrectar</p><br/><br/>
         <p className="p"> Opcion incorrectar</p><br/><br/>
         <p className="p"> Opcion incorrectar</p><br/><br/>
            </div>
        <div className="col-6">
            <form className="form-group">
               <input className="form-control " type="text" placeholder=" Escribe tu pregunta"></input><br/><br/>
                <input className="form-control " type="password" placeholder=" Formula"></input><br/><br/>
                <teclado/>
                <input className="form-control " type="password" placeholder=" Tema"></input><br/><br/>
                <input className="form-control " type="password" placeholder=" Materias"></input><br/><br/><br/>
                <input className="form-control " type="password" placeholder=" Introduce tu contraseña"></input><br/><br/>

                <input className="form-control " type="password" placeholder=" Introduce tu contraseña"></input><br/><br/>
                <input className="form-control " type="password" placeholder=" Introduce tu contraseña"></input><br/><br/><br/>
                <input className="form-control " type="password" placeholder=" Introduce tu contraseña"></input><br/><br/>

                

            </form>

        </div>
        <div className="col-4">
        <button className="btn btn-primary btn-lg btn-block" type="submit">Agregar  Reactivo  </button><br/><br/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Borrar Todo</button><br/><br/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Volver     </button><br/><br/>
        </div>


        </div>
<br/><br/><br/></div></div>
    )
}

export default altareactivo
