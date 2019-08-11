import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'

class Category extends Component {
  render(){
    return(
      <Card className="bg-dark text-white text-center category">
        <Card.Img src={this.props.image} alt="Card image" style={{height:'250px'}} />
        <Card.ImgOverlay>
          <Card.Title className='categoryTitle'>{this.props.title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default Category;
