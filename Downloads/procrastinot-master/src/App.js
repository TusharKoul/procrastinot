import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph'
import PieChart from './PieChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Graph/>
            </div>
            <div className="col-lg-6 col-md-6">
              <PieChart />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
