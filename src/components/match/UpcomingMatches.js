import MatchSmall from "./MatchSmall";
import './matches.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import team4937 from '../../images/club-logos/4937.jpg'
import team73 from '../../images/club-logos/73.jpg'
import team35 from '../../images/club-logos/35.jpg'
import team108 from '../../images/club-logos/108.jpg'
import team124 from '../../images/club-logos/124.jpg'
import team166 from '../../images/club-logos/166.jpg'
import team167 from '../../images/club-logos/167.jpg'
import team185 from '../../images/club-logos/185.jpg'
import team188 from '../../images/club-logos/188.jpg'
import team189 from '../../images/club-logos/189.jpg'
import team285 from '../../images/club-logos/285.jpg'
import team4820 from '../../images/club-logos/4820.jpg'
import team4895 from '../../images/club-logos/4895.jpg'
import team4897 from '../../images/club-logos/4897.jpg'


export default function UpcomingMatches(){
    const[upcomingMatches, setUpcomingMatches] = useState([])
    let imagesArr = {
        4937: team4937,
        35: team35,
        73: team73,
        108: team108,
        124: team124,
        166: team166,
        167: team167,
        185: team185,
        188: team188,
        189: team189,
        285: team285,
        4820: team4820,
        4895: team4895,
        4897: team4897
    }

    function findName(name){
        let arr = name.split(" ");
        return arr[0] + " " + arr[1]
    }

    useEffect(() => {
        axios.get('https://rozgrywki.zprp.pl/api/pokaz_terminarz.php?Rozgrywki=10498&Sort=2&DniPlus=999').then(res=>{
            let count = Object.keys(res.data).length
            let tempUpcomingMatches = []
            for(let i = 1; i<count;i++){
                let match = res.data[i]
                if(match.ID_zespoly_gosc_ZespolNrKlubu == 167 ||  match.ID_zespoly_gosp_ZespolNrKlubu == 167){
                    console.log(match.ID_zespoly_gosp_ZespolNazwa, match.ID_zespoly_gosc_ZespolNazwa);
                    console.log(match)
                    tempUpcomingMatches.push({
                        date: match.ZawodyData,
                        time: match.ZawodyGodzina,
                        teamHome: findName(match.ID_zespoly_gosp_ZespolNazwa),
                        teamAway: findName(match.ID_zespoly_gosc_ZespolNazwa),
                        teamHomeSrc: imagesArr[match.ID_zespoly_gosp_ZespolNrKlubu],
                        teamAwaySrc: imagesArr[match.ID_zespoly_gosc_ZespolNrKlubu]
                    })
                }
            }
            setUpcomingMatches(tempUpcomingMatches)
        })
    },[])

    return(
        <div className="upcoming-matches-container">
            {upcomingMatches.map((match) => {
                return(
                    <MatchSmall
                        date={match.date}
                        time={match.time}
                        teamHome = {match.teamHome}
                        teamAway = {match.teamAway}
                        teamHomeSrc={match.teamHomeSrc}
                        teamAwaySrc={match.teamAwaySrc}
                    />
                )
            })}
        </div>
    )
}