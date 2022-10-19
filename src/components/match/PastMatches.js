import React, {useEffect, useState} from 'react'
import PrimaryButton from '../buttons/PrimaryButton';
import MatchBig from './MatchBig';
// import MatchMedium from './MatchMedium';
import teamHome from '../../images/club-logos/167.jpg';
import teamAway from '../../images/club-logos/4897.jpg';


// import teamHome from '../../images/club-logos/167.jpg';
// import teamAway from '../../images/club-logos/4897.jpg';

export default function PastMatches(props){

    const [count, setCount] = useState(4)
    const [elements, setElements] = useState([])

    function handleLoadMore(){
        setCount(count + 4)
    }

    useEffect(()=> {

    var arr = props.data;
    let elementsTemp = []
    if(arr.length > 0){
            for(var i = count+1; i >= 0; i--){
                if(arr[i] !== undefined){

                elementsTemp.push( 
                    <MatchBig 
                        date={arr[i].date}
                        time={arr[i].time}
                        teamHome = {arr[i].teamHome}
                        teamAway = {arr[i].teamAway}
                        teamHomeSrc={arr[i].teamHomeSrc}
                        teamAwaySrc={arr[i].teamAwaySrc}
                        teamHomeScore = {arr[i].teamHomeScore}
                        teamAwayScore = {arr[i].teamAwayScore}
                        teamHomePenalty = {arr[i].teamHomePenalty}
                        teamAwayPenalty = {arr[i].teamAwayPenalty}
                        />       
                    )
                                        
                }
            }
        }
        

        setElements(elementsTemp)
    }, [props.data, count])

    return(
        <div className="past-matches">
            <h1>Wyniki</h1>
            <div className="past-matches-inner">
            {elements}
            </div>
            { count+10 >= elements.length && <PrimaryButton
                onClick={handleLoadMore}
                text="Wczytaj więcej"
                />}
        </div>
    )
}