import React from "react";
import NewsListedBig from "../news/NewsListedBig";
import editIcon from '../../icons/edit.svg';
import deleteIcon from '../../icons/delete.svg';
import './CMS.css'

export default function NewsPanel(props){
    return (
        <div className="news-panel-container">
            <NewsListedBig 
                title={props.title}
                text={props.text}
                src={props.src}
                key={props.key}
                />
            <div className="news-panel-buttons">
                    <div className="news-panel-button edit">
                            <img src={editIcon} alt="edit"></img>
                            <a>Edit</a>
                    </div>
                    <div className="news-panel-button delete">
                            <img src={deleteIcon} alt="delete"></img>
                            <a>Delete</a>
                    </div>
            </div>
        </div>
    )
}