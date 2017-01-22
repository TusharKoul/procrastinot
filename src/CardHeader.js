import React, {Component} from 'react';
export default class CardHeader extends Component {
  render() {
    const { imageLink, category } = this.props;
    var style = { 
        backgroundImage: 'url(//logo.clearbit.com/' + imageLink + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    );
  }
}