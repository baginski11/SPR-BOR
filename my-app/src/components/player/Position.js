import React from 'react';
import './player.css';
import Player from './Player';
//import kamil from '../../images/players/kamil.jpg'
import data from './player-data'

export default function Position(props){
    var arr = JSON.parse(data);
    var counter = 0;
    return(
        <div className="position-container">
            <h2>{props.positionName}</h2>
            <div className="players-container">
                {arr.map(player =>{
                    counter++;
                    if(counter === 4){
                        return(
                            <div>
                            <Player 
                            imgSrc={player.src}
                            number={player.number}
                            name={player.name}
                            goals={player.goals}
                            />
                            <div className="break"></div>
                            </div>
                        )      
                    }
                    else{
                    return(
                        <Player 
                            imgSrc={player.src}
                            number={player.number}
                            name={player.name}
                            goals={player.goals}
                            />
                    )
                    }
                })}
            </div>
        </div>
    )
}