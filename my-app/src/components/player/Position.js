import React from 'react';
import './player.css';
import Player from './Player';
import kamil from '../../images/players/kamil.jpg'

export default function Position(props){
    return(
        <div className="position-container">
            <h2>{props.positionName}</h2>
            <Player 
                imgSrc={kamil}
                number="13"
                name="Kamil Ramiączek"
                goals="63"
                />
            <Player 
                imgSrc={kamil}
                number="13"
                name="Kamil Ramiączek"
                goals="63"
                />
            <Player 
                imgSrc={kamil}
                number="13"
                name="Kamil Ramiączek"
                goals="63"
                />
        </div>
    )
}