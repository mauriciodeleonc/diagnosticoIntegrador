import React, {Component} from 'react'
import Category from './Category'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Categories extends Component {
  render(){
    const ghost = <i class="fas fa-ghost fa-3x"></i>
    const heart = <i class="fas fa-heart fa-3x"></i>
    const bomb = <i class="fas fa-bomb fa-3x"></i>
    return(
      <div>
        <Category icon={ghost} title='Terror' />
        <Category icon={heart} title='Amor' />
        <Category icon={bomb} title='Acción' />
      </div>
    );
  }
}

export default Categories;
