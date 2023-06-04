const editplayer1=document.getElementById("player1edit")
const editplayer2=document.getElementById("player2edit")
let userform=document.querySelector('form')

const gamedata=[
     [0,0,0],
     [0,0,0],
     [0,0,0],
];

const players=[{
    name:'',
    symbol:'X'
},
{
    name:'',
    symbol:'O'
},];

const PlayerConfig=document.getElementById("config-overlay")
const backdrop=document.getElementById("backdrop")

let cancelbutton=document.getElementById("cancel")
let submitbutton=document.getElementById("submit")

let err=document.getElementById("error")

let editedplayer=0;

let activePlayer=0;


let startgamebutton=document.getElementById("startgame")

const activename=document.getElementById("active-player-name")

const gameboard=document.getElementById("active-game")
const gamefield=document.getElementById("game-board")
const gameover=document.getElementById("gameover")

editplayer1.addEventListener('click',openplayer)
editplayer2.addEventListener('click',openplayer)

cancelbutton.addEventListener('click',cancelconfig)
backdrop.addEventListener('click',cancelconfig)

userform.addEventListener('submit',playerdetails)
startgamebutton.addEventListener('click',startnewgame)


gameboard.addEventListener('click',selectgamefield)

