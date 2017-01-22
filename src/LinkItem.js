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
    		<img src={'http://www.google.com/s2/favicons?domain=' + this.props.data.link} role="presentation" />
    	</div>
    );
  }
}