import React, {useState, useEffect} from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/team.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Position from '../components/player/Position';
import axios from 'axios';
import KR from './../images/players/KR.jpg'
import MB from './../images/players/MB.jpg'
import KD from './../images/players/KD.jpg'
import JF from './../images/players/JF.jpg'
import DH from './../images/players/DH.jpg'
import BH from './../images/players/BH.jpg'
import DL from './../images/players/DL.jpg'
// import FJ from '../../images/players/FJ.jpg'
import AK from './../images/players/AK.jpg'
import MK from './../images/players/MK.jpg'
import LK from './../images/players/LK.jpg'
import KL from './../images/players/KL.jpg'
import KM from './../images/players/KM.jpg'
import SP from './../images/players/SP.jpg'
import PP from './../images/players/PP.jpg'
import MS from './../images/players/MS.jpg'
import RS from './../images/players/RS.jpg'
import AS from './../images/players/AS.jpg'
import PW from './../images/players/PW.jpg'
import BZ from './../images/players/BZ.jpg'

class Player{


    constructor(name, src, goals){
        this.name = name;
        this.src = src;
        this.goals = goals;
    }

    setGoals(num){
        console.log(num)
        this.goals = num;
        console.log(this.goals)
    }
}

class IPosition{
    constructor(name, arr){
        this.name = name;
        this.arr = arr;
    }
}



export default function Team(){
    let player1 = new Player("Kamil Ramiączek", KR, 0);
    let player2 = new Player("Marcin Borzymowski", MB, 0);
    let player3 = new Player("Dekarz Kamil", KD, 0);
    let player4 = new Player("Jan Feliszek", JF, 0);
    let player5 = new Player("Dominik Halla", DH, 0);
    let player6 = new Player("Borys Hałka", BH, 0);
    // let player7 = new Player("Filip Jaśiński", FJ, 0);
    let player8 = new Player("Adrian Kaźmirski", AK, 0);
    let player9 = new Player("Michał Krupiarz", MK, 0);
    let player10 = new Player("Łukasz Kurzydło", LK, 0);
    let player11 = new Player("LASOTA Dominik", DL, 0);
    let player12 = new Player("Kacper Latko", KL, 0);
    let player13 = new Player("Krzysztof Muszak", KM, 0);
    let player14 = new Player("Szymon Pedryc", SP, 0);
    let player15 = new Player("Piotr Piróg", PP, 0);
    let player16 = new Player("Maciej Skrzypek", MS, 0);
    let player17 = new Player("Rafał Siemierz", RS, 0);
    let player18 = new Player("Artur Szabat", AS, 0);
    let player20 = new Player("Patryk Wiącek", PW, 0);
    let player21 = new Player("Bartosz Żubrowski", BZ, 0);

    const[players, setPlayers] = useState([player10, player13, player11, player16, player20, player1, player3, player4, player5, player14, player15, player17, player18, player6, player8, player12, player2, player21, player9])
    
    const[bramkarze, setBramkarze] = useState(undefined)
    const[rozgrywajacy, setRozgrywajacy] = useState(undefined)
    const[skrzydlowi, setSkrzydlowi] = useState(undefined)
    const[obrotowi, setObrotowi] = useState(undefined)

    useEffect(() => {
        axios.get('https://rozgrywki.zprp.pl/api/pokaz_strzelcow.php?Rozgrywki=10498').then(res => {
            let tempPlayers = players;
            players.forEach((player, i) => {
                res.data.forEach(playerData => {
                    let firstName = player.name.split(" ")[0]
                    let lastName = player.name.split(" ")[1].toUpperCase()
                    if(firstName === playerData.Imie && lastName === playerData.Nazwisko){
                        tempPlayers[i].setGoals(playerData.Bramki);
                        console.log(playerData.Imie, playerData.Nazwisko, playerData.Bramki)
                    }
                })
            });
            console.log(tempPlayers)
            setPlayers(tempPlayers)
            setBramkarze(new IPosition("Bramkarze", [player10, player13, player16, player20]))
            setRozgrywajacy( new IPosition("Rozgrywający", [player1, player3, player4, player5, player14, player15, player17, player18, player11]))
            setSkrzydlowi( new IPosition("Skrzydłowi", [player6, player8, player12]))
            setObrotowi( new IPosition("Obrotowi", [player2, player21, player9]))
            
        })
        }, [])

    

    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Zespół"
                />
            {bramkarze !== undefined && <><Position 
                positionName="Bramkarze"
                data={bramkarze}
                />
            <Position 
                positionName="Rozgrywający"
                data={rozgrywajacy}
                />
            <Position 
                positionName="Skrzydłowi"
                data={skrzydlowi}
                />
            <Position 
                positionName="Obrotowi"
                data={obrotowi}
                /></>}
            <Footer />
        </div>
    )
}