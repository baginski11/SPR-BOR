import React from 'react';

export default function PrimaryButton(props){
    return(
        <div className="secondary-button" onClick={props.onClick}>
            <h6 className="secondary-button-text">{props.text}</h6>
        </div>
    )
}