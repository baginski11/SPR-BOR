import React from 'react';
import './news.css';
import PrimaryButton from '../buttons/PrimaryButton';
import hamburger from '../../icons/side-hamburger.svg'
//import image from '../../images/header-backgrounds/news.jpg'

export default function NewsListedBig(props){
    return (
        <div className="listed-big">
            <div className="listed-big-inner">
                <div className="listed-big-icon-text">
                    <img className="icon" src={hamburger} alt="hamburger icon"></img>
                    <div className="listed-big-vertical">
                        <h6 className="listed-big-title">{props.title}</h6>
                        <p>{props.text}</p>
                        <PrimaryButton 
                            text="Czytaj dalej"
                            />
                    </div>
                </div>
                <img className="news-image" src={props.src} alt="news"></img>
            </div>
            <div className="underline"></div>
        </div>
    )
}