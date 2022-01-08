/*jshint esversion: 6 */
/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementById("button");
    for (let button of buttons){
        button.addEventListener("click",  e => 
        {
            playerImage = e.target.dispatchEvent;
            rNum = Math.floor(Math.random() * 3) + 1;
            generateComputerSelection();
            compareSelection();
            computerSelection.innerHTML = '<img src ="assets/images/'+ compImage + '.png">';
            playerSelection.innerHTML = '<img src ="assets/images/' + playerImage + '.png">';
            displayResults.innerHTML = result;
            incrementComputerScore();
            incrementPlayerScore();
        
        })
    }
})
var rNum;
var result;
let oldScore = undefined;

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const resultDisplay = document.getElementById("result");
const computerSelection = document.getElementById("compImage");
const playerSelection = document.getElementById("playerImage");
//const possibleSelections = document.querySelectorAll(".choices");


function generateComputerSelection(){
    if(rNum == 0)
    {
        compImage= 'rock';
    } else  if(rNum == 1)
    {
        compImage = 'paper';
    } else  if(rNum == 2)
    {
        compImage = 'scissors';
    }
}

function compareSelection(){

    if(playerImage == compImage)
    {
        result = "It's a tie game!";
    } else if (playerImage == 'scissors' && compImage == 'paper')
    {
     result = "You Win!";  
    }else if (playerImage == 'paper' && compImage == 'rock')
    {
     result = "You Win!" ;  
    }else if (playerImage == 'rock' && compImage == 'scissors')
    {
     result = "You Win!";   
    }else if (playerImage == 'scissors' && compImage == 'rock')
    {
     result = "Computer Wins!";  
    }else if (playerImage == 'rock' && compImage == 'paper')
    {
     result = "Computer Wins!";  
    }else if (playerImage == 'paper' && compImage == 'scissors')
    {
     result = "Computer Wins!";   
    }}

    function incrementPlayerScore(){
        let oldScore =parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldScore;
    }
    
    
    function incrementComputerScore(){
        let oldScore =parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldScore;
    }