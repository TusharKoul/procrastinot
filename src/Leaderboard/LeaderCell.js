import React, {Component} from 'react';

export default class LeaderCell extends Component {
    render() {
        return (
        <div className="leaderboard-cell" style={{width : 190}}>
            <div> Friend name </div>
            <div> saved 30 minutes this week </div>
        </div>
        );
    }
}