import React  from "react";
import{ Navbar,Nav,Dropdown,Container, DropdownButton,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css";
export default  class Menu23 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark" >
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  </Nav>
                  <DropdownButton id="dropdown-basic-button" title="Hola Usuario">
                  <Dropdown.Header id="user">
                      <Row>
                  <FontAwesomeIcon icon={faUserCircle}/>
                  </Row>
                  <Row>
                      #USERNAME#
                  </Row>
                  </Dropdown.Header>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Ayuda</Dropdown.Item>
                   
                    </DropdownButton>
               
              </Navbar.Collapse>
            </Container>
          </Navbar>



         );
    }
}
 
