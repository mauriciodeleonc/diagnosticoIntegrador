import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import logo from './notflix.png'

class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {inputVal: ''}
  }
  render(){
    return(
      <>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home"><Image className='logo' src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Busca dentro de tus peliculas..."
                  className="mr-sm-2 rounded"
                  ref='queryInput'
                  onChange={() => {
                    this.props.filtroNav(ReactDOM.findDOMNode(this.refs.queryInput).value)
                  }}/>
              </Form>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      </>
    );
  }
}

export default Navigation;
