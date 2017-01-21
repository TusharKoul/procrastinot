import React, { Component } from 'react';

export default class LinkItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    // const { todos, actions } = this.props;

    return (
    	<div>
    		<h1> {this.props.data.name} </h1>
    		<img src="blah.jpg" />
    	</div>
    );
  }
}