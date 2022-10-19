import React, {useEffect, useState} from 'react';
import './matches.css';
import MatchMedium from './MatchMedium';
import axios from "axios";
import team4937 from '../../images/club-logos/4937.jpg'
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
import teamHome from '../../images/club-logos/167.jpg'
import teamAway from '../../images/club-logos/4897.jpg'

export default function NextLast(){
    const[next, setNext] = useState(undefined)
    const[last, setLast] = useState(undefined)

    function findName(name){
        let arr = name.split(" ");
        return arr[0] + " " + arr[1]
    }

    let imagesArr = {
        4937: team4937,
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

    useEffect(() => {
        axios.get('http://rozgrywki.zprp.pl/api/pokaz_terminarz.php?Rozgrywki=10498&Sort=2&DniPlus=999').then(res=>{
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
            setNext(tempUpcomingMatches[0])
        })
        axios.get('http://rozgrywki.zprp.pl/api/pokaz_terminarz.php?Rozgrywki=10498&Sort=2&DniMinus=999').then(res=>{
            console.log(res)
            let count = Object.keys(res.data).length
            let tempPastMatches = []
            for(let i = 1; i<count;i++){
                let match = res.data[i]
                if(match.ID_zespoly_gosc_ZespolNrKlubu == 167 ||  match.ID_zespoly_gosp_ZespolNrKlubu == 167){
                    console.log(match.ID_zespoly_gosp_ZespolNazwa, match.ID_zespoly_gosc_ZespolNazwa);
                    console.log(match)
                    tempPastMatches.push({
                        date: match.ZawodyData,
                        time: match.ZawodyGodzina,
                        teamHome: findName(match.ID_zespoly_gosp_ZespolNazwa),
                        teamAway: findName(match.ID_zespoly_gosc_ZespolNazwa),
                        teamHomeSrc: imagesArr[match.ID_zespoly_gosp_ZespolNrKlubu],
                        teamAwaySrc: imagesArr[match.ID_zespoly_gosc_ZespolNrKlubu],
                        teamHomeScore: match.wynik_bramki_gosp,
                        teamAwayScore: match.wynik_bramki_gosc,
                        teamHomePenalty: match.dogrywka_karne_gosp,
                        teamAwayPenalty: match.dogrywka_karne_gosc,

                    })
                }
            }
            setLast(tempPastMatches[0])
        })
    },[])

    return (
        <div className="next-last-container">
            {next !== undefined && <div className="next-last">
                <h4>Następny mecz</h4>
                <MatchMedium 
                    date={next.date}
                    time={next.time}
                    teamHome = {next.teamHome}
                    teamAway = {next.teamAway}
                    teamHomeSrc={next.teamHomeSrc}
                    teamAwaySrc={next.teamAwaySrc}
                />
            </div>}
            {last !== undefined && <div className="next-last">
                <h4>Ostatni mecz</h4>
                <MatchMedium 
                    date={last.date}
                    time={last.time}
                    teamHome = {last.teamHome}
                    teamAway = {last.teamAway}
                    teamHomeSrc={last.teamHomeSrc}
                    teamAwaySrc={last.teamAwaySrc}
                    teamHomeScore = {last.teamHomeScore}
                    teamAwayScore = {last.teamAwayScore}
                    teamHomePenalty = {last.teamHomePenalty}
                    teamAwayPenalty = {last.teamAwayPenalty}
                    
                />
            </div>}
        </div>
    )
}