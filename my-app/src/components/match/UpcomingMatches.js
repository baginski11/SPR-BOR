import MatchSmall from "./MatchSmall";
import './matches.css';
import React from 'react';
import teamHome from '../../images/club-logos/167.jpg'
import teamAway from '../../images/club-logos/4897.jpg'

export default function UpcomingMatches(){

    return(
        <div className="upcoming-matches-container">
            <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
            <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
            <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
            <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
            <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
            <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
                <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
                <MatchSmall
                date="25/07/2002"
                time="18:00"
                teamHome = "SPR BOR"
                teamAway = "SPR GOKIS"
                teamHomeSrc={teamHome}
                teamAwaySrc={teamAway}
                />
        </div>
    )
}