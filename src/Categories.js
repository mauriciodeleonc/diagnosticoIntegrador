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
      <Row style={{paddingTop: '20px', paddingBottom: '20px'}}>
        <Col>
          <Category image={terror} title='Terror' />
        </Col>
        <Col>
          <Category image={amor} title='Amor' />
        </Col>
        <Col>
          <Category image={accion} title='Acción' />
        </Col>
      </Row>
    );
  }
}

export default Categories;
