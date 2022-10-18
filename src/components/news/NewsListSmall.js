import React, {useState} from 'react';
import './news.css';
import NewsListedSmall from './NewsListedSmall';
import SecondaryButton from '../buttons/SecondaryButton'
import data from './news-data';
import { useNavigate } from 'react-router';

export default function NewsListSmall(props){
    const [count, setCount] = useState(4)
    let navigate = new useNavigate()

    function handleAllNews(){
        navigate('/aktualnosci')
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
                onClick={handleAllNews}
            /> }
        </div>
    )
} 