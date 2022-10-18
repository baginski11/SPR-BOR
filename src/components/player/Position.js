import React from 'react';
import './player.css';
import Player from './Player';


export default function Position(props){

    console.log(props)

    return(
        <div className="position-container">
            <h2>{props.positionName}</h2>
            <div className="players-container">
                {props.data !== undefined && props.data.arr.map(player =>{
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