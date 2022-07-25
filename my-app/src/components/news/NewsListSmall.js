import React, {useState} from 'react';
import './news.css';
import NewsListedSmall from './NewsListedSmall';
import SecondaryButton from '../buttons/SecondaryButton'
import data from './news-data';

export default function NewsListSmall(props){
    const [count, setCount] = useState(4)

    function handleLoadMore(){
        setCount(count + 4)
    }

    var arr = JSON.parse(data);
    var elements = []
    for(var i = 0; i < count; i++){
        elements.push(
            <NewsListedSmall
                title={arr[i].title}
                text={arr[i].text}
                src={arr[i].src}
                />
            )
    }
    
    return (
        <div className="list-small-container">
            <div className="listed-news">
                {elements}
            </div>
            {count + 4 <= arr.length && <SecondaryButton
                text={props.buttonText}
                onClick={handleLoadMore}
            /> }
        </div>
    )
} 