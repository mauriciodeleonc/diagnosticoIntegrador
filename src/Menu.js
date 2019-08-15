import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MovieCard from './MovieCard'
import Agregar from './Agregar'
import Firebase from "firebase";
import config from "./config";
import React, {Component} from 'react'
import Navigation from'./Navigation'
import Categories from'./Categories'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.removeData = this.removeData.bind(this);
    this.updateData = this.updateData.bind(this);
    Firebase.initializeApp(config);

    this.state = {
      peliculas: [],
      filtro: undefined,
      value: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  writeUserData(){
    Firebase.database().ref("/").update(this.state);
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let categoria = this.state.categoria;
    let nombre = this.refs.nombre.value;
    let duracion = this.refs.duracion.value;
    let director = this.refs.director.value;
    let protagonistas = this.refs.protagonistas.value;
    let uid = this.refs.uid.value;
    if (uid && categoria && nombre && duracion && director && protagonistas) {
      const { peliculas } = this.state;
      const countPeliculas = peliculas.findIndex(data => {
        return data.uid === uid;
      });
      peliculas[countPeliculas].categoria = categoria;
      console.log(categoria);
      peliculas[countPeliculas].nombre = nombre;
      peliculas[countPeliculas].duracion = duracion;
      peliculas[countPeliculas].director = director;
      peliculas[countPeliculas].protagonistas = protagonistas;
      console.log(peliculas);
      Firebase.database().ref("/peliculas").set(peliculas);
    } else if (categoria && nombre && director && duracion && protagonistas) {
      const uid = new Date().getTime().toString();
      const peliculas = this.state.peliculas;
      console.log(peliculas);
      peliculas.push({ uid, categoria, nombre, duracion, director, protagonistas })
      Firebase.database().ref("/peliculas").update(peliculas);
    }

    this.refs.categoria.value = "";
    this.refs.nombre.value = "";
    this.refs.uid.value = "";
    this.refs.duracion.value = "";
    this.refs.director.value = "";
    this.refs.protagonistas.value = "";
  };

  removeData = pelicula => {
    const { peliculas } = this.state;
    const newState = peliculas.filter(data => {
      return data.uid !== pelicula.uid;
    });
    Firebase.database().ref('/peliculas').set(newState);
  };

  updateData = pelicula => {
    this.refs.uid.value = pelicula.uid;
    this.refs.categoria.value = pelicula.categoria;
    this.refs.nombre.value = pelicula.nombre;
    this.refs.director.value = pelicula.director;
    this.refs.duracion.value = pelicula.duracion;
    this.refs.protagonistas.value = pelicula.protagonistas;
  };

  filtrar(input){
    let filtro = [...this.state.peliculas];
    if(input !== ""){
      let arreglo = filtro.filter(pelicula =>
        pelicula.nombre.toLowerCase().startsWith(input.toLowerCase()) || pelicula.director.toLowerCase().startsWith(input.toLowerCase())
      );
      console.log(arreglo);
      if(arreglo)
        this.setState({filtro: arreglo})
    } else this.setState({filtro: undefined})
  }

  filtrarCategorias(categoria){
    let filtro = [...this.state.peliculas];
    let arreglo = filtro.filter(pelicula => pelicula.categoria === categoria);
    if(arreglo) this.setState({filtro: arreglo}); else this.setState({filtro: []})
  }


   onChange(e){
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({value: e.target.value})
      }
   }

  render() {
    let peliculas = [];
    if(this.state.filtro) peliculas = this.state.filtro; else peliculas = this.state.peliculas;
    return (
      <>
      <Navigation filtroNav = {this.filtrar.bind(this)}/>
      <Container>
        <Row className="justify-content-md-center" style={{paddingTop: '20px'}}><h1>Todas tus peliculas en el mejor lugar</h1></Row>
        <Row className='justify-content-md-center'>
          <Categories filtrarCategorias = {this.filtrarCategorias.bind(this)} />
        </Row>
        <Row>
            {peliculas.map(pelicula => (
              <Col sm={1} md={2} lg={4}>
              <MovieCard
                uid = {pelicula.uid}
                nombre = {pelicula.nombre}
                categoria = {pelicula.categoria}
                duracion = {pelicula.duracion}
                director = {pelicula.director}
                remove = {this.removeData}
                upgrade = {this.updateData}
                pelicula = {pelicula}
                protagonistas = {pelicula.protagonistas}
                />
                </Col>
            ))}

        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Card id='agregar'>
              <Card.Body>
              <Card.Title id="agregar-pelicula" class='h2' style={{marginBottom: '15px'}}>
                ¡Agrega una película!
              </Card.Title>
              <form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail" role='form'>
                <input type="hidden" ref="uid" />
                  <Form.Label column sm={4}>
                    Nombre de la pelicula
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Ej. The Revenant" ref='nombre' maxlength='50' />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={4}>
                    Duración (en minutos)
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Ej. 185" ref='duracion' value={this.state.value} onChange={this.onChange} maxlength='3' min='0' />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={4}>
                    Director(a)
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Ej. Quentin Tarantino" ref='director' maxlength='20' />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={4}>
                    Protagonistas
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Ej. Leonardo DiCaprio" ref='protagonistas' maxlength='30' />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row} >
                    <Form.Label column sm={4}>
                      Categoria
                    </Form.Label>
                      <Col sm={8}>
                        <Form.Check
                          inline
                          type="radio"
                          label="Acción"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios3"
                          ref='categoria'
                          className = 'space'
                          value='Acción'
                          onClick={() => this.setState({categoria: 'Acción'})}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Amor"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                          ref='categoria'
                          className = 'space'
                          value='Amor'
                          onClick={() => this.setState({categoria: 'Amor'})}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Terror"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                          ref='categoria'
                          value='Terror'
                          onClick={() => this.setState({categoria: 'Terror'})}
                        />
                      </Col>
                  </Form.Group>
                </fieldset>
                <Button type="submit" className="btn btn-primary">
                  Agregar película
                </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Menu;
