import React from 'react';
import MatchBig from './MatchBig';

export default function Month(props){
    return(
        <div>
            <h4>{props.monthName}</h4>
            {props.data.map(match => {
                <MatchBig 
                    //to change with data
                    date="25/07/2002"
                    time="18:00"
                    teamHome = "SPR BOR"
                    teamAway = "SPR GOKIS"
                    teamHomeSrc={teamHome}
                    teamAwaySrc={teamAway}
                    teamHomeScore = "34"
                    teamAwayScore = "34"
                    teamHomePenalty = "4"
                    teamAwayPenalty = "2"
                    />
            })}
        </div>
    )
}