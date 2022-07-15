import React from 'react';
import './player.css'

export default function Player(props){
    return(
        <div className="player-component">
            <img src={props.imgSrc} alt="player"></img>
            <div className="player-text-container">
                <div className="title-number">
                    <h1>{props.number}</h1>
                    <h4>{props.name}</h4>
                </div>
                <span className="line"></span>
                <p>{props.goals} bramki w tym sezonie</p>
            </div>
        </div>
    )
}