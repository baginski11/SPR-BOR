import React from 'react';
import '../components/CMS/CMS.css';
import NewsPanel from '../components/CMS/NewsPanel';
import img from '../images/header-backgrounds/fans.jpg';
import SecondaryButton from '../components/buttons/SecondaryButton'

export default function CMS(){
    return(
        <div className="cms-wrapper">
                <div className="cms-head">
                    <h1></h1>
                    <div className="cms-buttons">
                        <SecondaryButton />
                        <SecondaryButton />
                    </div>
                </div>
                <NewsPanel 
                    title="dzien dobry"
                    text="gdzie pan idzie"
                    src={img}
                    />
        </div>
    )
}
