import KR from '../../images/players/KR.jpg'
import MB from '../../images/players/MB.jpg'
import KD from '../../images/players/KD.jpg'
import JF from '../../images/players/JF.jpg'
import DH from '../../images/players/DH.jpg'
import BH from '../../images/players/BH.jpg'
// import FJ from '../../images/players/FJ.jpg'
import AK from '../../images/players/AK.jpg'
import MK from '../../images/players/MK.jpg'
import LK from '../../images/players/LK.jpg'
import KL from '../../images/players/KL.jpg'
import KM from '../../images/players/KM.jpg'
import SP from '../../images/players/SP.jpg'
import PP from '../../images/players/PP.jpg'
import MS from '../../images/players/MS.jpg'
import RS from '../../images/players/RS.jpg'
import AS from '../../images/players/AS.jpg'
import PW from '../../images/players/PW.jpg'
import BZ from '../../images/players/BZ.jpg'
import axios from 'axios'

class Player{
    constructor(name, src, goals){
        this.name = name;
        this.src = src;
        this.goals = goals;
    }
}

class Position{
    constructor(name, arr){
        this.name = name;
        this.arr = arr;
    }
}


export default async function getPlayers(){


let player1 = new Player("Kamil Ramiączek", KR, 63);
let player2 = new Player("Marcin Borzymowski", MB, 63);
let player3 = new Player("Dekarz Kamil", KD, 63);
let player4 = new Player("Jan Feliszek", JF, 63);
let player5 = new Player("Dominik Halla", DH, 63);
let player6 = new Player("Borys Hałka", BH, 63);
// let player7 = new Player("Filip Jaśiński", FJ, 63);
let player8 = new Player("Adrian Kaźmirski", AK, 63);
let player9 = new Player("Michał Krupiarz", MK, 63);
let player10 = new Player("Łukasz Kurzydło", LK, 63);
// let player11 = new Player("LASOTA Dominik", kamil, 63);
let player12 = new Player("Kacper Latko", KL, 63);
let player13 = new Player("Krzysztof Muszak", KM, 63);
let player14 = new Player("Szymon Pedryc", SP, 63);
let player15 = new Player("Piotr Piróg", PP, 63);
let player16 = new Player("Maciej Skrzypek", MS, 63);
let player17 = new Player("Rafał Siemierz", RS, 63);
let player18 = new Player("Artur Szabat", AS, 63);
let player20 = new Player("Patryk Wiącek", PW, 63);
let player21 = new Player("Bartosz Żubrowski", BZ, 63);



let players = [player10, player13, player16, player20, player1, player3, player4, player5, player14, player15, player17, player18, player6, player8, player12, player2, player21, player9]


async function getGoals(){
    
    axios.get('https://rozgrywki.zprp.pl/api/pokaz_strzelcow.php?Rozgrywki=10498').then(res => {
    players.forEach(player => {
        res.data.forEach(playerData => {
            let firstName = player.name.split(" ")[0]
            let lastName = player.name.split(" ")[1].toUpperCase()
            if(firstName === playerData.Imie && lastName === playerData.Nazwisko){
                player.goals = playerData.Bramki;
                console.log(playerData.Imie, playerData.Nazwisko, playerData.Bramki)
            }
            else{
                player.goals = 0
            }
        })
    });
})}

await getGoals();

let bramkarze = new Position("Bramkarze", [player10, player13, player16, player20])
let rozgrywajacy = new Position("Rozgrywający", [player1, player3, player4, player5, player14, player15, player17, player18])
let skrzydlowi = new Position("Skrzydłowi", [player6, player8, player12])
let obrotowi = new Position("Obrotowi", [player2, player21, player9])

console.log(player1)

var arr = [bramkarze, rozgrywajacy, skrzydlowi, obrotowi];

return arr

    
}