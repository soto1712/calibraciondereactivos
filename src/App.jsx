import React from 'react';
import './App.css';
import Menu1 from './Componentes/Menu1';
import Iniciarsesion from "./Componentes/Iniciarsesion"
import Registrarse from './Componentes/Registrarse';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import altareactivo from './Componentes/altareactivo';
import examengen from './Componentes/examengen';



function App() {
  return (
 
      <Router>      
       <div className="App">   
        <Menu1 />  
        
            <Switch>
          <Route path={'/Iniciarsesion'} component={Iniciarsesion}></Route>    
          <Route path={'/Registrarse'} component={Registrarse}></Route>
          <Route path={'/altareactivo'} component={altareactivo}></Route>
          <Route path={'/examengen'} component={examengen}></Route>
            </Switch>


        


    </div>
    </Router>
     
  );
}

export default App;