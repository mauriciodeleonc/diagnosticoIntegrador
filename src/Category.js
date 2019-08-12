import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Category extends Component {
  render(){
    return(
      <Card className="bg-dark text-white text-center category">
        <Card.Img src={this.props.image} alt="Card image" className='categoryImg' />
        <Card.ImgOverlay>
          <Card.Title className='categoryTitle'>{this.props.title}</Card.Title>
          <Button variant="primary" variant='info' onClick={() => this.props.filtrarCategorias(this.props.title)}>Ver categoria</Button>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Category;
