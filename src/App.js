import React, { Component } from 'react';
// import logo from './logo.svg';
// import MainSection from './MainSection';

import Card from './Card';
import './App.css';
import PostsData from './PostsData';
import Leaderboard from './Leaderboard/Leaderboard';

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <MainSection />
//       </div>
//     );
//   }
// }

export default class App extends Component { 
  constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    // PostsData.forEach(function(value, key) {
    //   value.push({'image': '//logo.clearbit.com/' + value.link})
    // });
    this.setState({
      posts: PostsData
    });
  }
 
  render() {
    return (
    <div>
      <header className="app-header" />
      {/*<Title />*/}
      <div className="leaderboard-container">
        <Leaderboard/>
      </div>
      <div className="app-card-list" id="app-card-list">
        {
          Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
    </div>
    );
  }
}



