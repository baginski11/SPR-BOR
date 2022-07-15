import React from 'react';
import './Header.css';


export default function Header(props)
{
    return (
        <div className="header-container">
                <img src={props.src} alt="Druzyna spr bor"></img>
                <h1>{props.text}</h1>
        </div>
    );
}