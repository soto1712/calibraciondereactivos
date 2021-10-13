import React from 'react'
import '../App.css';
function bienvenidoalumno() {
    return (
        <div className="alumno-imagen" >
          <div className="container"><br/><br/>
          <div className="row">
             <div className="col-12">
              <h1>Bienvenido Alumno</h1>
           
             </div>
           </div>
           <div className="row">
           <div className="col-6">
           <h2>Tus Materias</h2><br/><br/>
           <button className="btn btn-primary btn-lg btn-block" type="submit">Algebra  </button><br/><br/><br/><br/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Historia</button><br/><br/><br/><br/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Geografia    </button><br/><br/><br/><br/><br/><br/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Agregar Materia     </button><br/><br/>

           </div>
            <div className="col-6">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Volver    </button><br/><br/>
            <br/><br/><br/>

            </div>
           </div>




           </div> </div>       
    )
}

export default bienvenidoalumno
