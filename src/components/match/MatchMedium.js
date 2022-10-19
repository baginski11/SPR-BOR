import React from 'react';
import './matches.css';
import location from '../../icons/location.svg';
import Result from './Result';

export default function MatchMedium(props){
    return(
        <div className="medium-match">
            <div className="date-time">
                <p className="date">{props.date}</p>
                <p className="time">{props.time}</p>
            </div>
            <div className="teams-medium">
                <div className="team-medium left">
                    <h6>{props.teamHome}</h6>   
                    <img src={props.teamHomeSrc} alt="home team logo"></img>    
                </div>
                { props.teamHomeScore != null &&
                    <Result 
                        teamHomeScore = {props.teamHomeScore}
                        teamAwayScore = {props.teamAwayScore}
                        teamHomePenalty = {props.teamHomePenalty}
                        teamAwayPenalty = {props.teamAwayPenalty}
                        />
                }
                <div className="team-medium right">
                    <img src={props.teamAwaySrc} alt="away team logo"></img>
                    <h6>{props.teamAway}</h6>
                </div>
            </div>
            <div className="location">
                <img src={location} alt="location icon"></img>
                <p>Oborniki Slaskie</p>
            </div>
        </div>
    )
}