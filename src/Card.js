import React, {Component} from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';


export default class Card extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.details.category} imageLink={this.props.details.link}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    );
  }
}