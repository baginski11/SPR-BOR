import React, {useState} from 'react';
import NewsListedBig from './NewsListedBig';
import SecondaryButton from '../buttons/SecondaryButton'
import data from './news-data'

export default function NewsListBig(){
    const [count, setCount] = useState(4)

    function handleLoadMore(){
        setCount(count + 4)
    }

    var arr = JSON.parse(data);
    var elements = []
    for(var i = 0; i < count; i++){
        console.log("xd")
        elements.push(
            <NewsListedBig
                title={arr[i].title}
                text={arr[i].text}
                src={arr[i].src}
                />
            )
    }
    return(
        <div className="news-list-big-container">
            {elements}
            <div className="news-list-big-button-container">
                {count + 4 <= arr.length && <SecondaryButton
                    onClick={handleLoadMore}
                    text="Wczytaj więcej"
                    />}
            </div>
        </div>
    )
}