import React, {useState} from 'react'
import PrimaryButton from '../buttons/PrimaryButton';
import MatchBig from './MatchBig';
import Month from './Month';

// import teamHome from '../../images/club-logos/167.jpg';
// import teamAway from '../../images/club-logos/4897.jpg';

export default function PastMatches(props){
    const [count, setCount] = useState(4)

    function handleLoadMore(){
        setCount(count + 4)
    }

    var arr = props.data;
    var elements = []
    console.log(arr)
    for(var i = 0; i < count; i++){
        elements.push( 
            // <MatchBig 
            //     date={arr[i].date}
            //     time={arr[i].time}
            //     teamHome = {arr[i].teamHome}
            //     teamAway = {arr[i].teamAway}
            //     teamHomeSrc={teamHome}
            //     teamAwaySrc={teamAway}
            //     teamHomeScore = {arr[i].teamHomeScore}
            //     teamAwayScore = {arr[i].teamAwayScore}
            //     teamHomePenalty = {arr[i].teamHomePenalty}
            //     teamAwayPenalty = {arr[i].teamAwayPenalty}
            //     />
            <Month 
                monthName={arr[i].month}
                data={arr[i].matches}
                />
            )
    }

    return(
        <div className="past-matches">
            <h1>Wyniki</h1>
            <div className="past-matches-inner">
            {elements}
            </div>
            <PrimaryButton
                onClick={handleLoadMore}
                text="Wczytaj więcej"
                />
        </div>
    )
}