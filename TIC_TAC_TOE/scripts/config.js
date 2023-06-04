function openplayer(event)
{
    const Userid=event.target.dataset.player;
    editedplayer=Userid;
    PlayerConfig.style.display='block';
    backdrop.style.display='block';
}

function cancelconfig()
{
    PlayerConfig.style.display='none';
    backdrop.style.display='none';
    err.classList.remove("error")
}

function playerdetails(event)
{
    event.preventDefault();
    const formdata=new FormData(event.target);
    const Playername=formdata.get('playername').trim();
 
    if(!Playername)
    {
        err.classList.add("error")
        err.textContent="Please enter Valid Text";
        return;
    }    
    PlayerConfig.style.display='none';
    backdrop.style.display='none';

    const UpdateUser=document.getElementById('player-'+editedplayer+'-data')
    UpdateUser.children[1].textContent=Playername;
    players[editedplayer-1].name=Playername   
}