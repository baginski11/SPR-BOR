import React from 'react';
import MatchBig from './MatchBig';
import teamHome from '../../images/club-logos/167.jpg';
import teamAway from '../../images/club-logos/4897.jpg';

export default function Month(props){
    return(
        <div className="month-container">
            <h4>{props.monthName}</h4>
            <div className="month-matches-container">
            {props.data.map(match => 
                <MatchBig 
                    date={match.date}
                    time={match.time}
                    teamHome = {match.teamHome}
                    teamAway = {match.teamAway}
                    teamHomeSrc={teamHome}
                    teamAwaySrc={teamAway}
                    teamHomeScore = {match.teamHomeScore}
                    teamAwayScore = {match.teamAwayScore}
                    teamHomePenalty = {match.teamHomePenalty}
                    teamAwayPenalty = {match.teamAwayPenalty}
                    />
            )}
            </div>
        </div>
    )
}