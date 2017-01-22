import React, {Component} from 'react';
import Button from './Button';

export default class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">March 20 2015</p>
        
        <h2>{this.props.title}</h2>
        
        <Button />
      </div>
    );
  }
}