import React, {useEffect, useState} from 'react'
import PrimaryButton from '../buttons/PrimaryButton';
import Month from './Month';




export default function UpcomingMatchesBig(props){
    const [count, setCount] = useState(2);
    const [elements, setElements] = useState([])

    function handleLoadMore(){
        setCount(count + 1)
    }
    
    useEffect(() => {

    var arr = props.data;
    let elementsTemp = [];

    if(arr.length > 0){
        for(var i = 0; i < count; i++)
            {
            elementsTemp.push(
                <Month 
                    monthName={arr[i].month}
                    data={arr[i].matches}
                    />
                )
            }
        setElements(elementsTemp)
    }

    }, [props.data, count])

    return(
        <div className="upcoming-big">
            <div className="upcoming-big-inner">
            {elements}
            </div>
            {/*cos tu nie gra*/}
            {count+1 <= elements.length && <PrimaryButton
                onClick={handleLoadMore} 
                text="Wczytaj więcej"
                />}
        </div>
    )
}