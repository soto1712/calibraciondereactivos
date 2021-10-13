import React from 'react';
import axios from 'axios';
import Loading from './cargando/cargando';

import {APIHOST as host} from '../app.json';
import {isNull} from 'util';

import { calculaexpiracionSesion } from './helpers/helpers';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default  class Iniciarsesion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Loading:false,
            usuario:" ",
            pass:" "
         }
     
    }
    iniciarlasesion(){
 
        axios.post(`${host}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass
        }).then(response=>{

            if(isNull(response.data.token)){
                alert("Usuario o contraseña invalidos");
            }else{
                cookies.set("_s", response.data.token,{
                    path:"/",
                    expires: calculaexpiracionSesion()
                })
                
           
                this.props.history.push("/Registrarse");
            
            }

           

        }).catch(err=>{
                console.error(err)
                this.setState({Loading:false});
        })
    }
    render() { 
        return ( 
            <div className="sesion-imagen"><br/><br/>   
                <br/><br/><br/><br/> 
                 
            <div className="container">
            < Loading show={this.state.Loading}/>
          
            <div className="row">
                
            <div className="col-4"></div>
                <div className="col-4"><br/>
                <h2>Iniciar Sesión</h2> 
                <hr/>
                <form className="form-group">
                    <input onChange={ e => this.setState({usuario:e.target.value})} className="form-control " type="text" placeholder=" Introduce tu Usuario"></input><br/><br/>
                    
                        
                    <input onChange={ e => this.setState({pass:e.target.value})} className="form-control " type="password" placeholder=" Introduce tu contraseña"></input><br/><br/>
                   
                    <button onClick={()=> this.iniciarlasesion()} className="btn btn-primary btn-lg btn-block" type="submit">Iniciar Sesión</button>
    
                </form>
    
                </div>
                <div className="col-4"></div>
    
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div></div>
                
           

         );
    }
}
 





