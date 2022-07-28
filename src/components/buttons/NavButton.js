import React from "react";
import './buttons.css';
import { Link } from "react-router-dom";

export default function NavButton(props){
    return (
        <div className="nav-button">
            {/* <a className="nav-button-text" href={props.link}>{props.value}</a> */}
            <Link to={props.link} style={{ textDecoration: 'none',  fontFamily: 'DP Clear Medium', fonSize: 14,  lineHeight: '130%',color: '#111312'}}>{props.value}</Link> 
            <div className="nav-underline"></div>
        </div>
    )
}