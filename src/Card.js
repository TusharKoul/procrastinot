import React, {Component} from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { Line } from 'rc-progress';

export default class Card extends Component {

	constructor() {
		super();

		let initialValue = function (min, max) {
  		return Math.random() * (max - min) + min;
		}

		this.state = {
      progress: initialValue(0, 100)
    }
	}

	componentDidMount() {

		setInterval(() => { 
			this.setState({
				progress: this.state.progress + 1 
			}); 
		}, 1000);

	}

  render() {
  	const progressBar = <Line percent={this.state.progress} strokeWidth="3" strokeColor="#D3D3D3" className="progress"/>
    return (
      <article className="card">
      	{this.props.details.category !== 'Work' ? progressBar : '' }
        <CardHeader category={this.props.details.category} imageLink={this.props.details.link} />
        <CardBody title={this.props.details.title} number={this.props.details.visits}/>
      </article>
    );
  }
}