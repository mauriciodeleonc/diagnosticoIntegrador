import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class MovieCard extends Component{
  constructor(props) {
    super(props);
    this.removeData = this.removeData.bind(this);//Sigo sin poder pasar funciones entre componentes
    this.updateData = this.updateData.bind(this);
    //this.pelicula = pelicula;
  }
  removeData(props) {
    this.props.remove(props);
  }

  updateData(props) {
    this.props.upgrade(props);
  }

  render(){
    return(
      <Card className='float-left movieCard' key={this.props.key}>
        <Card.Body>
          <Card.Title>Película: {this.props.nombre}</Card.Title>
          <Card.Text>Categoria: {this.props.categoria}</Card.Text>
          <Card.Text>Duración: {this.props.duracion}</Card.Text>
          <Card.Text>Dirección: {this.props.director}</Card.Text>
          //<Button onClick={() => this.props.remove()}>Borrar</Button>
          //<Button onClick={() => this.props.upgrade()}>Editar</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieCard
