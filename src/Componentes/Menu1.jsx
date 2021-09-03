import React from 'react'
import logo from './logo.svg';
import '../App.css';




 const Menu1 = () => {
    return (
       
      <div className="menu-imagen">
        <div className="header1">
      
<section>
<a href="./logo.svg" id="logo" target="_blank">PERAA</a>
<img src={logo} className="App-logo" alt="logo"/>
<label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
<input type="checkbox" id="toggle-1"/>

<nav>
<ul>
<li><a href='/Iniciarsesion'><i class="fas fa-home"></i>Inicio</a></li>
<li><a  href='/Registrarse'><i class="fas fa-users"></i>Registrarme</a></li>
<li><a href="/altareactivo"><i class="fab fa-fort-awesome"></i>Nosotros</a></li>
<li><a href="/examengen"><i class="fas fa-phone-square-alt"></i>Contacto</a></li>
<li><a href="#gallery"><i class="fab fa-blogger"></i>Blog</a></li>
<li><a href="#contact"><i class="icon-phone"></i>Contact</a></li>
</ul>
</nav>
</section>

</div>  
          </div>            
              

       
    
      
       
    )
}

export default Menu1
