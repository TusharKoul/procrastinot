import React, { Component } from 'react';

export default class Title extends Component {

  render() {
    return (
    	<section className="app-title">
      <div className="app-title-content">
        <h1>Latest News</h1>
        <p>Covering March & April 2015</p>
        <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
      </div>
    </section>
    );
  }
}