import React from 'react';
import {Link} from 'react-router-dom';
import './buttons.css'

export default function PrimaryButton(props){
    if(props.function === "link"){
        return(
            <div className="primary-button">
                <Link to={props.to} style={{ textDecoration: 'none'}}><h6 className="primary-button-text">{props.text}</h6></Link>
            </div>
            
        )
    }
    else{
        return(
            <div className="primary-button" onClick={props.onClick}>
                <h6 className="primary-button-text">{props.text}</h6>
            </div>
        )
    }
}