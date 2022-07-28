import React from 'react';
import './news.css';
import hamburger from '../../icons/side-hamburger.svg'

export default function NewsListedSmall(props){
    return (
        <div className="listed-small">
            <div className="listed-small-inner">
                <img className="icon" src={hamburger} alt="hamburger icon"></img>
                <h6>{props.title}</h6>
                <img className="news-image" src={props.src} alt="news"></img>
            </div>
            <div className="underline"></div>
        </div>
    )
} 