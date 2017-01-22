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
                    <LeaderCell name="John" icon="&#128526;" timeSaved='2hr 30min' width={330}/>
                    <LeaderCell name="Malcom" icon="&#x1f60a;" timeSaved='2hr' width={270}/>
                    <LeaderCell name="Judy" icon="&#128528;" timeSaved='1hr' width={200}/>
                    <LeaderCell name="Trisha" icon="&#128549;" timeSaved='15min' width={190}/>
                </div>
            </div>
        );
    }
}