import React from 'react';

export default function PrimaryButton(props){
    return(
        <div className="primary-button">
            <h6 className="primary-button-text">{props.text}</h6>
        </div>
    )
}