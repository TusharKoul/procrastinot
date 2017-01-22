import React, {Component} from 'react';
import Button from './Button';

export default class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">Visited {this.props.number} times today</p>
        <h2>{this.props.title}</h2>
        <Button />
      </div>
    );
  }
}