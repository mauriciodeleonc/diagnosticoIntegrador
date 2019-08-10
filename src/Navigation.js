import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import logo from './notflix.png'

class Navigation extends Component {
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image className='logo' src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl type="text" placeholder="Busca dentro de tus peliculas..." className="mr-sm-2 rounded" />
              <Button variant="outline-success" className='rounded'>Buscar</Button>
            </Form>
            <Button variant="outline-primary" className='rounded'>Agregar película</Button>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    );
  }
}

export default Navigation;
