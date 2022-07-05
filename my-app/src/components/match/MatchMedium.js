import React from 'react';
import './matches.css';
import location from '../../icons/location.svg';

export default function MatchMedium(props){
    return(
        <div className="medium-match">
            <div className="date-time">
                <p className="date">{props.date}</p>
                <p className="time">{props.time}</p>
            </div>
            <div className="teams-medium">
                <div className="team-medium">
                    <h6>{props.teamHome}</h6>   
                    <img src={props.teamHomeSrc} alt="home team logo"></img>    
                </div>
                <div class="team-medium">
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