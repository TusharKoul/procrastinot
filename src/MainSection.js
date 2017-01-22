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
      name: 'Google',
      img: 'card__image--flowers'
    },
    {
      link: 'facebook.com',
      name: 'Facebook',
      img: 'card__image--river'
    },
    {
      link: 'linkedin.com',
      name: 'LinkedIn',
      img: 'card__image--record'
    },
    {
      link: 'reddit.com',
      name: 'Reddit',
      img: 'card__image--fence'
    },
    {
      link: '9gag.com',
      name: '9gag',
      img: 'card__image--flowers'
    }];

    const { todos, actions } = this.props;

    return (
      <section>
      <ul className="cards">
      {data.map((item, index) =>
        <LinkItem key={index} data={item} {...actions} />
      )}
      </ul>
      </section>
    );
  }
}
