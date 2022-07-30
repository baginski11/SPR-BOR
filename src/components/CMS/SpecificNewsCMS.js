import React from 'react';
import './CMS.css';
import deleteIcon from '../../icons/delete.svg';
import PrimaryButton from '../buttons/PrimaryButton';

export default function SpecificNewsCMS(props){
    if(props.text == null && props.title == null && props.src == null){
        return(
            <div className="cms-specific-wrapper">
                <input type="file"></input>
                <img></img>      
                <h2>Title</h2>         
                <input id="title-input" type="text"></input>
                <p>Text</p>
                <textarea id="text-input" type="text"></textarea>
                <div className="cms-buttons">
                    <div className="news-panel-button delete">
                        <img src={deleteIcon} alt="delete"></img>
                        <a>Delete</a>
                    </div>
                    <PrimaryButton 
                        text="Add post"
                        />
                </div>

            </div>
        )
    }
    else{
        return(
            <div className="cms-specific-wrapper">
                <input type="file"></input>
                <img></img>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className="news-panel-button delete">
                    <img src={deleteIcon} alt="delete"></img>
                    <a>Delete</a>
                </div>
            </div>
        )
    }
}