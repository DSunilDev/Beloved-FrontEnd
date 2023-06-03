const editplayer1=document.getElementById("player1edit")
const editplayer2=document.getElementById("player2edit")
let userform=document.querySelector('form')

const PlayerConfig=document.getElementById("config-overlay")
const backdrop=document.getElementById("backdrop")

let cancelbutton=document.getElementById("cancel")
let submitbutton=document.getElementById("submit")

let err=document.getElementById("error")

let editedplayer=0;

editplayer1.addEventListener('click',openplayer)
editplayer2.addEventListener('click',openplayer)

cancelbutton.addEventListener('click',cancelconfig)
backdrop.addEventListener('click',cancelconfig)

userform.addEventListener('submit',playerdetails)