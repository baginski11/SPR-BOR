import React from 'react';
import './news.css';
import PrimaryButton from '../buttons/PrimaryButton';

export default function NewsHeadBig(props){
    
    return (
        <div className="news-head-big">
            <img src={props.src} alt="news"></img>
            <div className="news-head-big-inner">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <PrimaryButton
                text="Czytaj dalej"
            />
            </div>
        </div>
    )
}