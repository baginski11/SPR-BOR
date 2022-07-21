import React, {useState} from 'react'
import PrimaryButton from '../buttons/PrimaryButton';
import Month from './Month';




export default function UpcomingMatchesBig(){
    const [count, setCount] = useState(2)

    function handleLoadMore(){
        setCount(count + 1)
    }

    var arr = JSON.parse(data);
    var elements = []
    for(var i = 0; i < count; i++){
        elements.push(
            <Month 
                monthName={arr[i].month}
                data={arr[i].matches}
                />
            )
    }

    return(
        <div className="upcoming-big">
            <div className="upcoming-big-inner">
            {elements}
            </div>
            <PrimaryButton 
                text="Wczytaj więcej"
                />
        </div>
    )
}