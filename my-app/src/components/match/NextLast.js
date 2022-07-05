import React from 'react';
import './matches.css';
import MatchMedium from './MatchMedium';

import teamHome from '../../images/club-logos/167.jpg'
import teamAway from '../../images/club-logos/4897.jpg'

export default function NextLast(){
    return (
        <div className="next-last-container">
            <div className="next-last">
                <h4>Następny mecz</h4>
                <MatchMedium 
                    date="25/07/2002"
                    time="18:00"
                    teamHome = "SPR BOR"
                    teamAway = "SPR GOKIS"
                    teamHomeSrc={teamHome}
                    teamAwaySrc={teamAway}
                />
            </div>
            <div className="next-last">
                <h4>Ostatni mecz</h4>
                <MatchMedium 
                    date="25/07/2002"
                    time="18:00"
                    teamHome = "SPR BOR"
                    teamAway = "SPR GOKIS"
                    teamHomeSrc={teamHome}
                    teamAwaySrc={teamAway}
                />
            </div>
        </div>
    )
}