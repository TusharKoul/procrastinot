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
                    <LeaderCell name="John" icon="&#128526;" timeSaved='4hr 30min' width={330}/>
                    <LeaderCell name="Malcom" icon="&#128512;" timeSaved='3hr 30min' width={300}/>
                    <LeaderCell name="Judy" icon="&#128539;" timeSaved='3hr' width={270}/>
                    <LeaderCell name="Dian" icon="&#128528;" timeSaved='2hr 15min' width={240}/>
                    <LeaderCell name="Michael" icon="&#128533;" timeSaved='1hr 15min' width={210}/>
                    <LeaderCell name="Tushar" icon="&#128549;" timeSaved='60 min' width={190}/>
                    <LeaderCell name="Judy" icon="&#128531;" timeSaved='50min' width={160}/>
                </div>
            </div>
        );
    }
}