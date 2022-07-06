import React from 'react';
import './news.css';
import NewsListedSmall from './NewsListedSmall';
import SecondaryButton from '../buttons/SecondaryButton'
import image from '../../images/kids.jpg'

export default function NewsListSmall(props){
    return (
        <div className="list-small-container">
            <div className="listed-news">
                <NewsListedSmall 
                    title="Półkolonia dla chłopców z rocznika 2008/2009"
                    src={image}
                />
                <NewsListedSmall 
                    title="Półkolonia dla chłopców z rocznika 2008/2009"
                    src={image}
                />
                <NewsListedSmall 
                    title="Półkolonia dla chłopców z rocznika 2008/2009"
                    src={image}
                />
                <NewsListedSmall 
                    title="Półkolonia dla chłopców z rocznika 2008/2009"
                    src={image}
                />
            </div>
            <SecondaryButton
                text="Wszystkie aktualności"
            />
        </div>
    )
} 