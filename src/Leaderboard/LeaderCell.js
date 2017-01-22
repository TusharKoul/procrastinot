import React, {Component} from 'react';

export default class LeaderCell extends Component {
    // const myWidth = this.props.width;
    render(){
        return (
        <div className="leaderboard-cell" style={{width : 330}}>
            <div style={{display: 'inline-block'}}>
                <div className="leaderboard-cell-name"> {this.props.name} </div>
                <div> saved {this.props.timeSaved} this week </div>
            </div>
            <div className="leaderboard-cell-icon">{this.props.icon}</div>
        </div>
        );
    }
}