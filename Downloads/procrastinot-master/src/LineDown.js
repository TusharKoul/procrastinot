import React, { Component } from 'react';
import { VictoryLine, VictoryContainer,VictoryTheme } from 'victory';

export default class LineDown extends Component {
   information = {
      data : [

         {x:1,y:80},
         {x:2,y:77},
         {x:3,y:72},
         {x:4,y:69},
         {x:5,y:65},
         {x:6,y:62},
         {x:10,y:59}
         ]
      }



  render() {
    return (
      <VictoryLine
      data={this.information.data}
      theme={VictoryTheme.material}
      domain={{x:[0,7],y:[50,100]}}/>
      );
   }
}