import React from 'react';
import './panel.css';
import PrimaryButton from '../buttons/PrimaryButton';

export default function Panel(props){
    return(
        <div className="panel-container">
            <h2>{props.title}</h2>
            <img src={props.imgSrc} alt="panel"></img>
            <p>{props.description}</p>
            <PrimaryButton 
                text={props.title}
                function={props.buttonFunction}
                to={props.to}
                />
        </div>
    )
}