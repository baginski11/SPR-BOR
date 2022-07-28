import React from 'react';
import './Header.css';


export default function HeadBackground(props)
{
    return (
                <h1 className="head-text">{props.text}</h1>
    );
}