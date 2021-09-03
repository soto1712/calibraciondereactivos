import React from 'react'

function Registrarse() {
    return (
        <div className="registro">
        <div className="container">
        <div className="row">
        <div className="col-7">
            <h1>Registrarme</h1>

        </div>
            <div className="col-5"><br/>
            
            <form className="form-group">
            <select className="select-css" name="Tipo de Usuario" >

                <option>Alumno</option>

                <option>Docente</option>

               

            </select> <br/>
       
                <input className="form-control " type="text" placeholder=" Usuario"></input><br/>
                <input className="form-control " type="password" placeholder=" Contraseña"></input><br/>
                <input className="form-control " type="text" placeholder=" Nombre"></input><br/>
                <input className="form-control " type="text" placeholder=" Apellido paterno"></input><br/>
                <input className="form-control " type="text" placeholder=" Apellido Materno"></input><br/>
                <input className="form-control " type="text" placeholder=" Correo"></input><br/>
                <input className="form-control " type="text" placeholder=" Confirmar Correo"></input><br/>

                <button className="btn btn-primary btn-lg btn-block" type="submit">Iniciar Sesión</button>

            </form>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/><br/> <br/><br/> 

            </div>
          
    </div></div></div>
    )
}

export default Registrarse
