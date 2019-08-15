import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class MovieCard extends Component{
  constructor(props) {
    super(props);
    this.pelicula = this.props.pelicula;

    this.state = {
      modalShow: false
    }
  }

  removeData(props) {
    this.props.remove(props);
  }

  updateData(props) {
    this.props.upgrade(props);
  }

  checkMinutes(props) {
    var minuto = 'minuto';
    if(this.props.duracion !== 1)
      minuto = 'minutos';
    return minuto;
  }

  render(){
    const pelicula = {
      nombre: this.props.nombre,
      duracion: this.props.duracion,
      uid: this.props.uid,
      categoria: this.props.categoria,
      protagonistas: this.props.protagonistas,
      director: this.props.director
    }
    return(
      <>
        <Card className='float-left movieCard' key={this.props.uid}>
          <Card.Body>
            <Card.Text><b>Película:</b> {this.props.nombre}</Card.Text>
            <Card.Text><b>Duración:</b> {this.props.duracion} {this.checkMinutes()}</Card.Text>
            <Card.Text><b>Director(a):</b> {this.props.director}</Card.Text>
            <Card.Text><b>Protagonistas:</b> {this.props.protagonistas}</Card.Text>
            <Card.Text><b>Categoria:</b> {this.props.categoria}</Card.Text>
            <Button style={{marginRight: '10px'}} variant='outline-danger' onClick={() => this.setState({modalShow: true})}>Borrar</Button>
            <Button variant='outline-info' onClick={() => this.props.upgrade(this.props.pelicula)}>Editar</Button>
          </Card.Body>
        </Card>
        <ModalEliminar
          show={this.state.modalShow}
          pelicula={pelicula}
          borrar = {() => {
            this.props.remove(this.props.pelicula);
            this.setState({modalShow: false});
          }}
          close={() => this.setState({modalShow: false})}
        />
      </>
    );
  }
}

class ModalEliminar extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {nombre,uid,director,protagonistas,duracion,categoria} = this.props.pelicula;
    return (
      <Modal
        show={this.props.show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop
        keyboard
        onHide={this.props.close}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¿Estás seguro que quieres eliminar la siguiente película?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Nombre: </b>{nombre}</p>
          <p><b>Duración: </b>{duracion}</p>
          <p><b>Director(a): </b>{director}</p>
          <p><b>Protagonistas: </b>{protagonistas}</p>
          <p><b>Categoría: </b>{categoria}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={this.props.close}>Cancelar</Button>
          <Button variant="outline-danger" onClick={this.props.borrar}>Borrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MovieCard
