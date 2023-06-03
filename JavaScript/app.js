console.dir(document);
/*GOING TO OTHER LINKS*/ 
document.children[0].children[1].children[1].children[0].href="https:\\www.google.com";

let k=document.createElement('a')
k.href='https:\\www.dsunil.in'
k.textContent="Sunil's website"

let y=document.getElementById('#p')
y.textContent="Hello Everyone";
y.append(k);

let tt=document.getElementById('#tb')
function textbox(){
    let enteredText=tt.value;
    console.log(enteredText)
}
tt.addEventListener('input',textbox)


/**INTERACTIVE TEXT BUTTON DONE */

let secondTextBox=document.getElementById('#st')
let livechange=document.getElementById('#ch')

let max=60;

function number(event)
{
    let enteredText=event.target.value;
    let venteredText=enteredText.length;
    let min=max-venteredText;
    livechange.textContent=min;
    if(min<=10)
    {
        secondTextBox.classList.add("warn")
    }
    else
    {
        secondTextBox.classList.remove("warn")
    }
}
secondTextBox.addEventListener('input',number)

/* Sum of numbers Calculation*/

let a=document.getElementById("#ac")
let Sum=document.getElementById("#calculatesum")
let Res=document.getElementById("#result")
function SumofNumbers()
{
    let UserValue=Sum.value;
    let result=0;
    for (let j=0;j<=UserValue;j++)
    {
     result=result+j;
    }
   Res.textContent=result;
}

a.addEventListener('click',SumofNumbers)
Sum.addEventListener('input',SumofNumbers)

/* Highlight links using the For of Loop */

let highlight=document.getElementById("#high")

function color()
{
    let anchor=document.querySelectorAll("#highlight a")
    for(let anchore of anchor)
    {
        anchore.classList.add("highlight")
    }
}

highlight.addEventListener('click',color)

/*For in Loop for the Accessing of Objects*/
const duser={
    name:'Sunil',
    Age:"19",
    Ambition:"SDE"
};


const disp=document.getElementById("#disp")

function userdisp()
{
    const po=document.getElementById("#po");
    po.innerHTML='';
    for(const data in duser)
    {
        const dummy=document.createElement("li");
        const userdata=data.toUpperCase()+';'+duser[data];
        dummy.textContent=userdata;
        po.append(dummy);
    }
}

disp.addEventListener('click',userdisp);

/*appied Conditionals Successfully*/

/*While loop Test Condiiton*/

let dicebutton=document.getElementById("#db")
let dicedisplay=document.getElementById("#dplace")
let diceroll=document.getElementById("#roll")

function rolldice()
{
    return Math.floor(Math.random()*6)+1;
}

dicedisplay.innerHTML='';

function RollCalculate()
{
    let NoRolls=diceroll.value; /*Got the Value from User*/
    let dvalue=false;
    let times=0;
    while(!dvalue)
    {
        times++;
        let Value=rolldice()
        dvalue=NoRolls==Value   /*Checking the Dice and User Value */
        let ResultDisplay=document.createElement('li')
        ResultDisplay.textContent="Roll"+times+":"+Value;
        dicedisplay.append(ResultDisplay);
    }
    
}
dicebutton.addEventListener('click',RollCalculate)

/*Analyzed While loop */




















 