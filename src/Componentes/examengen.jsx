import React from 'react'
import '../App.css';

function examengen() {
    return (
        <div className="examen-imagen">
        <div className="container"><br/><br/>
        <div className="row">
        <div className="col-12">
            <h1>Generar Examen Piloto</h1>
        <div className="row">
            
        <div className="col-2">

      <br/><br/> <br/><br/>
         <p className="p"> Numero de Preguntas</p>
         <p className="p"> Numero de Versiones</p><br/>
         <p className="p"> TIEMPO</p><br/>
         <p className="p"> Abrir el Examen</p><br/>  <br/>  
         <p className="p"> Cerrar el Examen</p><br/>  
         <p className="p"> Limite de Tiempo</p><br/> 
         <p className="p"> Cuanto de Agote el Tiempo</p><br/> <br/>
         <p className="p"> CALIFICACIÓN</p><br/> <br/>
         <p className="p"> Categoria de Calificación</p><br/> 
         <p className="p"> Calificación Aprobatoria</p><br/>
         <p className="p"> Intentos Permitidos</p><br/>
         <p className="p"> Puntuación por Defecto</p><br/>  
         
            </div>
        <div className="col-6">
            <form className="form-group">
            <div className="row">
                <div className="col-10">
                <select className="select-css" name="temas" >

                <option>Tema 1.1</option>
                <option>Tema 1.2</option>
                <option>Tema 1.3</option>
                <option>Tema 1.4</option>
                <option>Tema 1.5</option>              



                </select>

                </div>
                <div className="col-2"><br/>
                <button className="btn btn-primary btn-lg btn-block" type="submit">+</button><br/><br/>
                
       
                </div></div>
            
                <select className="select-css" name="numero-versiones" >

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>              



                    </select>
                    <select className="select-css" name="numero-versiones" >

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>              



                    </select><br/><br/><br/><br/>
                    <div className="row">
                    <div className="col-6">
                    <input className="form-control "id="date" type="date"></input><br/><br/>
                    </div>
                    <div className="col-1 ">
                    <input   type="radio" name="habilitar" value="1"></input>
                    </div>
                    <div className="col-1 ">
                   <p className="p"> Habilitar</p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-6">
                    <input className="form-control "id="date" type="date"></input><br/><br/>
                    </div>
                    <div className="col-1 ">
                    <input   type="radio" name="habilitar" value="1"></input>
                    </div>
                    <div className="col-1 ">
                   <p className="p"> Habilitar</p>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-3">
                    <input className="form-control" type="number" name="duracion"
                     min="1" max="500"></input>

                     </div>
                     <div className="col-3">
                     <select className="form-control" name="numero-versiones" >

                    <option>Minutos</option>
                    <option>Horas</option>              

                    </select>
                    </div>
                    <div className="col-1 ">
                    <input   type="radio" name="habilitar" value="1"></input>
                    </div>
                    <div className="col-1 ">
                   <p className="p"> Habilitar</p>
                    </div>
                        
                     <div className="row">
                         <div className="col-12">
                    <select className="select-css" name="numero-versiones" >

                     <option>Los intentos abiertos son enviados automaticamente</option>
                     <option>2</option>      
                          
                    <option>3</option>                                    



                            </select>
                        </div>   
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="row">
                         <div className="col-6">
                    <select className="select-css" name="numero-versiones" >

                     <option>Sin Categorizar</option>
                     <option>2</option>   
                     <option>3</option>                                    



                            </select>
                        </div> 
                      
                    </div></div><br/><br/>
                    <div className="row">
                         <div className="col-6">
                         <input className="form-control " type="text" placeholder=" Calificación"></input><br/><br/>
                        </div> 
                      
                    </div>
                    
                    <div className="row">
                    <div className="col-3">
                    <input className="form-control" type="number" name="intentos"
                     min="1" max="500"></input>
                     </div></div><br/><br/>
                      <div className="row">
                    <div className="col-3">
                    <input className="form-control" type="number" name="puntuacion"
                     min="1" max="500"></input>
                    </div></div>
                    <br/><br/>


                 <button className="btn btn-primary btn-lg btn-block" type="submit">Generar Examen  </button><br/><br/>
                 
            </form>

        </div>
       <div className="col-6">
       </div>


        </div>
<br/><br/><br/></div></div></div></div>
    )
}

export default examengen
