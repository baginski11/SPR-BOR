import React from 'react';
import './player.css';
import Player from './Player';


export default function Position(props){

    var arr = JSON.parse(props.data);
    return(
        <div className="position-container">
            <h2>{props.positionName}</h2>
            <div className="players-container">
                {arr.map(player =>{
                    return(
                        <Player 
                            imgSrc={player.src}
                            number={player.number}
                            name={player.name}
                            goals={player.goals}
                            />
                    )
                    }
                )}
            </div>
        </div>
    )
}