import React, { Component } from 'react';
import {VictoryChart,} from 'victory';
import LineDown from './LineDown'

export default class Graph extends Component {

  render() {
    return (
      <VictoryChart
      domain={{x:[0,7],y:[50,100]}}>
               <LineDown/>
      </VictoryChart>
      );
   }
}