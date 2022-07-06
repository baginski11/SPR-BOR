import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import './news.css';



export default function NewsHeadSmall(props){
    return(
        <div className="news-head-small">
            <img src={props.src} alt="news"></img>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <PrimaryButton
                text="Czytaj dalej"
            />
        </div>
    )
}