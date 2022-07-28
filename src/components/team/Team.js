import React from 'react';
import './team.css';

export default function Team(props){
    return(
        <div className="team-container">
            <h4 className="team-title">{props.name}</h4>
            <img className="team-img" src={props.imgSrc} alt="team"></img>
        </div>
    )
}