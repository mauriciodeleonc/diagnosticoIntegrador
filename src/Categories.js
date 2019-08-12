import React, {Component} from 'react'
import Category from './Category'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import terror from './terror.jpg'
import amor from './love.jpg'
import accion from './action.jpg'

class Categories extends Component {
  render(){
    return(
      <Row style={{paddingTop: '20px', paddingBottom: '20px'}} className='justify-content-md-between'>
        <Col xs={12} sm={6} md={4}>
          <Category image={terror} title='Terror' filtrarCategorias = {this.props.filtrarCategorias} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Category image={amor} title='Amor' filtrarCategorias = {this.props.filtrarCategorias} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Category image={accion} title='Acción' filtrarCategorias = {this.props.filtrarCategorias} />
        </Col>
      </Row>
    );
  }
}

export default Categories;
