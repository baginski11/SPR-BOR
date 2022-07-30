import React from 'react';
import './pages.css';
import NewsPanel from '../components/CMS/NewsPanel';
import img from '../images/header-backgrounds/fans.jpg';
import SecondaryButton from '../components/buttons/SecondaryButton';
import data from '../components/news/news-data'


export default function CMS(){

    const arr = JSON.parse(data);
    return(
        <div className="cms-wrapper">
                <div className="cms-head">
                    <h1>SPR BOR Content Management System</h1>
                    <div className="cms-buttons">
                        <SecondaryButton 
                            text="Fetch matches"
                            />
                        <SecondaryButton 
                            text="Add new post"
                            />
                    </div>
                </div>
                <div className="cms-news-container">
                {arr.map((element) => 
                    <NewsPanel
                    title={element.title}
                    text={element.text}
                    src={element.src}
                    />
                )}

                </div>          
        </div>
    )
}
