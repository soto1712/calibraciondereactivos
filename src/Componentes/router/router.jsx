import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Iniciarsesion from "../Iniciarsesion";
import Registrarse from '../Registrarse';
import altareactivo from '../altareactivo';
import examengen from '../examengen';
import bienvenidoalumno from '../bienvenidoalumno';
import PrivateRouter from "../auth/privadoRoute";
export default function AppRouter(){
    return(
    <Router>
    <Switch>
          <Route exact path={['/','/Iniciarsesion']} component={Iniciarsesion}></Route>    
          <Route exact path={'/Registrarse'} component={Registrarse}></Route>
          <Route exact path={'/altareactivo'} component={altareactivo}/>

          <PrivateRouter exact path="/home" component={Home}/>

          <PrivateRouter exact path={'/examengen'} component={examengen}/>
          <Route exact path={'/bienvenidoalumno'} component={bienvenidoalumno}></Route>
          <Route path="*" component={()=><h1><br/><br/><br/><br/><br/><br/>Error 400<br/> no se encontro la pagina</h1>}/>
            </Switch>
            </Router>
            );
}

function Home(){
  return <h2>Hola</h2>
}