import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ModalAgregar(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="agregar-pelicula"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="agregar-pelicula">
          ¡Agrega una nueva película!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Nombre de la pelicula
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Ej. The Revenant" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={4}>
            Duración (en minutos)
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="number" placeholder="Ej. 185" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Director/Directora
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Ej. Quentin Tarantino" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Protagonistas
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Ej. Leonardo DiCaprio" />
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
              />
              <Form.Check
                type="radio"
                label="Amor"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Acción"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset> 
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={props.onHide}>Agregar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAgregar;
