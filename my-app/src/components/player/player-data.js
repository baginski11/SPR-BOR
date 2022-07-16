import kamil from '../../images/players/kamil.jpg'

class Player{
    constructor(name, number, src, goals){
        this.name = name;
        this.src = src;
        this.goals = goals;
    }
}

var player1 = new Player("Kamil Ramiączek",13, kamil, 63);
var player2 = new Player("Kamil Ramiączek",13, kamil, 63);
var player3 = new Player("Kamil Ramiączek",13, kamil, 63);
var player4 = new Player("Kamil Ramiączek",13, kamil, 63);
var player5 = new Player("Kamil Ramiączek",13, kamil, 63);
var player6 = new Player("Kamil Ramiączek",13, kamil, 63);
var player7 = new Player("Kamil Ramiączek",13, kamil, 63);

var arr = [player1, player2, player3, player4, player5, player6, player7];
var data = JSON.stringify(arr)

export default data;