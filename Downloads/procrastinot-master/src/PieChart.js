import React, { Component } from 'react';
import { VictoryPie } from 'victory';

export default class PieChart extends Component {
   user = {
      data : [
         {x:"Stack Overflow",y:80},
         {x:"Gmail",y:70},
         {x:"Youtube",y:60},
         {x:"Github",y:50},
         {x:"Facebook",y:40},
         {x:"Reddit",y:30}
      ]
   }

  render() {
    return (
      <VictoryPie data={this.user.data}  />
    );
   }

}