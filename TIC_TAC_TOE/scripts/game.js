function startnewgame()
{
    if(players[0].name=='' || players[1].name=='')
    {
        mess.textContent="Please enter your Custom Name"
        return;
    }else{
        mess.textContent="Go Play"
    }
    gameboard.style.display="block";
}

function switchplayer()
{
    if(activePlayer==0)
    {
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
    activename.textContent=players[activePlayer].name;
}

let zero=0;


function selectgamefield(event)
{
    if(event.target.tagName!=='LI')
    {
        return;
    }
    const selectedgamefield=event.target;
    const selectedcolumn=selectedgamefield.dataset.col -1;
    const selectedrow= selectedgamefield.dataset.row -1;

    if(gamedata[selectedrow][selectedcolumn]>0)
    {
        alert("Warn");
        return;
    }
    
    selectedgamefield.textContent=players[activePlayer].symbol;
    selectedgamefield.classList.add('disabled')

    gamedata[selectedrow][selectedcolumn]=activePlayer + 1;
    console.log(gamedata)
    switchplayer();
}