import React from 'react';
import Navigation from'./Navigation'
import Categories from'./Categories'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Categories />
      </Container>
    </>
  );
}

export default App;
