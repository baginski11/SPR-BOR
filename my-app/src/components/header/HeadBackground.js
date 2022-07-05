import React from 'react';
import './Header.css';


export default function HeadBackground(props)
{
    return (
                <img className="background-image" src={props.src} alt="Druzyna spr bor"></img>
    );
}