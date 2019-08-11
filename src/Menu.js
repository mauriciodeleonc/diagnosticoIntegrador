import React from "react";
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import MovieCard from './MovieCard'
import Firebase from "firebase";
import config from "./config";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.removeData = this.removeData.bind(this);
    this.updateData = this.updateData.bind(this);
    Firebase.initializeApp(config);

    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database().ref("/").set(this.state);
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
    let categoria = this.refs.categoria.value;
    let nombre = this.refs.nombre.value;
    let duracion = this.refs.duracion.value;
    let director = this.refs.director.value;
    //let protagonistas[] = this.refs.protagonistas.value; AQUI ES DONDE ESTA EL PEDO
    let uid = this.refs.uid.value;

    if (uid && categoria && nombre && duracion && director) {
      const { peliculas } = this.state;
      const devIndex = peliculas.findIndex(data => {
        return data.uid === uid;
      });
      peliculas[devIndex].categoria = categoria;
      peliculas[devIndex].nombre = nombre;
      peliculas[devIndex].duracion = duracion;
      peliculas[devIndex].director = director;
      //peliculas[devIndex].protagonistas = protagonistas[devIndex];
      this.setState({ peliculas });
    } else if (categoria && nombre && director && duracion) {
      const uid = new Date().getTime().toString();
      const { peliculas } = this.state;
      peliculas.push({ uid, categoria, nombre, duracion, director });
      this.setState({ peliculas });
    }

    this.refs.categoria.value = "";
    this.refs.nombre.value = "";
    this.refs.uid.value = "";
    this.refs.duracion.value = "";
    this.refs.director.value = "";
  };

  removeData = pelicula => {
    const { peliculas } = this.state;
    const newState = peliculas.filter(data => {
      return data.uid !== pelicula.uid;
    });
    this.setState({ peliculas: newState });
  };

  updateData = pelicula => {
    this.refs.uid.value = pelicula.uid;
    this.refs.categoria.value = pelicula.categoria;
    this.refs.nombre.value = pelicula.nombre;
    this.refs.director.value = pelicula.director;
    this.refs.duracion.value = pelicula.duracion;
  };

  render() {
    const { peliculas } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {peliculas.map(pelicula => (
                <MovieCard
                  key = {pelicula.uid}
                  nombre = {pelicula.nombre}
                  categoria = {pelicula.categoria}
                  duracion = {pelicula.duracion}
                  director = {pelicula.director}
                  remove = {this.removeData}
                  update = {this.updateData}
                  pelicula = {this.pelicula}//Necesito pasar pelicula como parametro
                  />
                  /*<div
                  key={pelicula.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{pelicula.categoria}</h5>
                    <p className="card-text">{pelicula.nombre}</p>
                    <p className="card-text">{pelicula.duracion}</p>
                    <p className="card-text">{pelicula.director}</p>
                    <button
                      onClick={() => this.removeData(pelicula)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(pelicula)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>*/
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Agregar Pelicula</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Categoria</label>
                    <input
                      type="text"
                      ref="categoria"
                      className="form-control"
                      placeholder="Categoria"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Nombre</label>
                    <input
                      type="text"
                      ref="nombre"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Director</label>
                    <input
                      type="text"
                      ref="director"
                      className="form-control"
                      placeholder="Director"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Duracion</label>
                    <input
                      type="text"
                      ref="duracion"
                      className="form-control"
                      placeholder="Duracion"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Agregar película
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
