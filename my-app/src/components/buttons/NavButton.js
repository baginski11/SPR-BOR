import React from "react";
import './buttons.css';

export default function NavButton(props){
    return (
        <div className="nav-button">
            <a className="nav-button-text" href={props.link}>{props.value}</a>
            <div className="nav-underline"></div>
        </div>
    )
}