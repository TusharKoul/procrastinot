import React, { Component } from 'react';
import LinkItem from './LinkItem';
// import style from './MainSection.css';


export default class MainSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = [{
      link: 'google.com',
      name: 'Google'
    },
    {
      link: 'facebook.com',
      name: 'Facebook'
    }];

    const { todos, actions } = this.props;

    return (
      <section>
      {data.map((item, index) =>
        <LinkItem key={index} data={item} {...actions} />
      )}
      </section>
    );
  }
}
