import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Agregar extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Card>
          <Card.Title id="agregar-pelicula">
            {this.props.titulo}
          </Card.Title>
        <Card.Body>
        <Form onSubmit={() => this.props.submit()}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Nombre de la pelicula
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="Ej. The Revenant" ref='nombre' />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={4}>
              Duración (en minutos)
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="number" placeholder="Ej. 185" ref='duracion' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Dirección
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="text" placeholder="Ej. Quentin Tarantino" ref='directo' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Protagonistas
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Ej. Leonardo DiCaprio" ref='protagonistas' />
            </Col>
            <Col sm={2}>
              <Button variant='primary' >Agregar</Button>
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Categoria
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Terror"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  ref='categoria'
                />
                <Form.Check
                  type="radio"
                  label="Amor"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  ref='categoria'
                />
                <Form.Check
                  type="radio"
                  label="Acción"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  ref='categoria'
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Button type="submit" variant="outline-danger">Agregar</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Agregar;
