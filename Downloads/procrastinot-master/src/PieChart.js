import React, { Component } from 'react';
import { VictoryPie, VictoryTheme} from 'victory';


export default class PieChart extends Component {
   user = {
      data : [
         {x:"Gmail",y:80},
         {x:"Youtube",y:70},
         {x:"Stack Overflow",y:60},
         {x:"Github",y:50},
         {x:"Facebook",y:40},
         {x:"Reddit",y:30}
      ],
      padding : 70,
      innerRadius : 10
   }

  render() {
    return (
      <VictoryPie data={this.user.data}  padding={this.user.padding} theme={VictoryTheme.material}
      innerRadius={this.user.innerRadius}/>
    );
   }

}