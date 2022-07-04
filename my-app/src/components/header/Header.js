import React from 'react';
import './Header.css';


export default function Header(props)
{
    return (
        <div className="container">
            <img className="background-image" src={props.src} alt="Druzyna spr bor"></img>
            <h1 className="head-text">{props.text}</h1>
        </div>
    );
}