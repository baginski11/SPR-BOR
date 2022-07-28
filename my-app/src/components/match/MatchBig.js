import React, {useState, useEffect} from 'react';
import Result from './Result';
import location from '../../icons/location.svg';
import MatchMedium from './MatchMedium';

export default function MatchBig(props){
    const [device, setDevice] = useState('desktop')

    useEffect(() => {
        function handleView(){
            if(window.innerWidth > 1200){
                setDevice('desktop')
            }
            else{
                setDevice('mobile')
            }
        }
        handleView();

        window.addEventListener('resize', handleView);

        return () => {
            window.removeEventListener('resize', handleView)
        }
    })
    if(device === 'desktop'){
    return(
        <div className="big-match">
            <div className="teams-big">
                <p className="date date-time-big">{props.date}</p>
                <div className="teams-big-inner">
                <div className="team-medium" style={{textAlign:'right'}}>
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
                <div class="team-medium">
                    <img src={props.teamAwaySrc} alt="away team logo"></img>
                    <h6>{props.teamAway}</h6>
                </div>
                </div>
                <p className="time date-time-big">{props.time}</p>
            </div>
            <div className="location">
                <img src={location} alt="location icon"></img>
                <p>Oborniki Slaskie</p>
            </div>
        </div>
    )}
    else{
        return(
            <MatchMedium 
                date={props.date}
                time={props.time}
                teamHome='SPR BOR'
                teamAway='UKS GOKIS'
                teamHomeScore = {props.teamHomeScore}
                teamAwayScore = {props.teamAwayScore}
                teamHomePenalty = {props.teamHomePenalty}
                teamAwayPenalty = {props.teamAwayPenalty}
                teamHomeSrc = {props.teamHomeSrc}
                teamAwaySrc = {props.teamAwaySrc}
                />
        )
    }
}