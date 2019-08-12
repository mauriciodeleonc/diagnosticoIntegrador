import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class MovieCard extends Component{
  constructor(props) {
    super(props);
    this.pelicula = this.props.pelicula;
  }

  removeData(props) {
    this.props.remove(props);
  }

  updateData(props) {
    this.props.upgrade(props);
  }

  checkMinutes(props) {
    var minuto = 'minuto';
    if(this.props.duracion != 1)
      minuto = 'minutos';
    return minuto;
  }

  render(){
    return(
      <Card className='float-left movieCard' key={this.props.key}>
        <Card.Body>
          <Card.Text><b>Película:</b> {this.props.nombre}</Card.Text>
          <Card.Text><b>Categoria:</b> {this.props.categoria}</Card.Text>
          <Card.Text><b>Duración:</b> {this.props.duracion} {this.checkMinutes()}</Card.Text>
          <Card.Text><b>Dirección:</b> {this.props.director}</Card.Text>
          <Card.Text><b>Protagonistas:</b> {this.props.protagonistas}</Card.Text>
          <Button style={{marginRight: '10px'}} variant='outline-danger' onClick={() => this.props.remove(this.props.pelicula)}>Borrar</Button>
          <Button variant='outline-info' onClick={() => this.props.upgrade(this.props.pelicula)}>Editar</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieCard
