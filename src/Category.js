import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'

class Category extends Component {
  render(){
    return(
      <Card style={{ width: '13rem'}} className='text-center'>
        <Card.Body>
          {this.props.icon}
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default Category;
