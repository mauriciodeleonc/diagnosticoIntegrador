import React, {Component} from 'react'
import Navigation from'./Navigation'
import Categories from'./Categories'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Menu from './Menu'

function App() {
    return (
      <>
        <Navigation />
        <Container>
          <Row className='justify-content-center'>
            <Categories />
          </Row>
          <Row>
            <h2>Tus peliculas agregadas recientemente</h2>
            <Menu />
          </Row>
        </Container>
      </>
    );
  }

export default App;
