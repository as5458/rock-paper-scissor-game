const choices= ["rock","paper","scissor"];
const playdisp=document.getElementById("playscore");
const compdisp=document.getElementById("compscore");
const restdisp=document.getElementById("result");
const playerscore=document.getElementById("pscore");
const compscore=document.getElementById("cscore");
let score1=0;
let score2=0;
function playgame(playerchoice){
    let i=(Math.floor(Math.random()*3));
    const compchoice=choices[i];
    let result="";
    if(playerchoice===compchoice){
        result="IT IS A DRAW!";
    }
   else{
    switch(playerchoice){
        case "rock":
            if(compchoice=="scissor"){
                result="PLAYER WIN!";
            }
            else{
                result="PLAYER LOST!";
            }
            break;
            case "paper":
            if(compchoice=="rock"){
                result="PLAYER WIN!";
            }
            else{
                result="PLAYER LOST!";
            }
            break;
            case "scissor":
            if(compchoice=="paper"){
                result="PLAYER WIN!";
            }
            else{
                result="PLAYER LOST!";
            }
            break;
    }
    
}
playdisp.textContent=`PLAYER:${playerchoice}`;
compdisp.textContent=`COMPUTER:${compchoice}`;
restdisp.textContent=result;
restdisp.classList.remove("greentext","redtext");
switch(result){
    case "PLAYER WIN!":
    restdisp.classList.add("greentext");
    score1++;
    playerscore.textContent=score1;
    break;
    case "PLAYER LOST!":
    restdisp.classList.add("redtext");
    score2++;
    compscore.textContent=score2;
    break;
}

}

