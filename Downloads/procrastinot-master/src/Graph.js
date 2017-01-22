import React, { Component } from 'react';
import { VictoryBar } from 'victory';
import {_victoryCore} from 'victory'

export default class Graph extends Component {
    user = {
      data : [
         {x:"A",y:80},
         {x:"B",y:70},
         {x:"C",y:60},
         {x:"D",y:50},
         {x:"E",y:40},
         {x:"F",y:30}
      ],
      sample : 6,
      catergories :
      ["Website","Visites"],
      standAlong: false,
      width : 600
}


  render() {
    return (
      <VictoryBar data={this.user.data} sample={this.user.sample}
      catergories={this.user.catergories} standalone={this.user.sample}
      width={this.user.width}/>
      );
   }
}