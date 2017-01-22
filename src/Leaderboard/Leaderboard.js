import React, {Component} from 'react';
import LeaderCell from './LeaderCell';
export default class Leaderboard extends Component {
    render() {
        return (
            <div className="leaderboard-body">
                <div className="leaderboard-header">
                    <h4 className="card-header--title">Leaderboard</h4>
                </div>
                <div className="leaderboard-list">
                    <LeaderCell>Friend 1</LeaderCell>
                    <LeaderCell>Friend 2</LeaderCell>
                    <LeaderCell>Friend 3</LeaderCell>
                    <LeaderCell>Friend 4</LeaderCell>
                </div>
            </div>
        );
    }
}