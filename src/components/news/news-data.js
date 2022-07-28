import image from '../../images/teams/seniorzy.jpg'

class News{
    constructor(title, text, id, src){
        this.title = title;
        this.src = src;
        this.text = text;
        this.id = id;
    }
}

var player1 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)
var player2 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)
var player3 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)
var player4 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)
var player5 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)
var player6 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)
var player7 = new News("Półkolonia dla chłopców z rocznika 2008/2009", "Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  ", 1, image)

var arr = [player1, player2, player3, player4, player5, player6, player7, player1, player2, player3, player4, player5, player6, player7];
var data = JSON.stringify(arr)

export default data;