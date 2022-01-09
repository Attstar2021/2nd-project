/*jshint esversion: 6 */
/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const resultDisplay = document.getElementById("result");
const computerSelection = document.getElementById("compImage");
const playerSelection = document.getElementById("playerImage");
//const possibleSelections = document.querySelectorAll(".choices");

var rNum;
var result;
let oldScore = undefined;


document.addEventListener("DOMContentLoaded", function(){
    let choices = document.getElementsByClassName("choices");
    for (let choice of choices){
        choice.addEventListener("click",  e => 
        {
            playerImage = e.currentTarget.id;
            console.log(playerImage);
            rNum = Math.floor(Math.random() * 3) + 1;
            generateComputerSelection();
            compareSelection();
            computerSelection.setAttribute("src",`./assets/images/${compImage}.png`);
            playerSelection.setAttribute("src",`./assets/images/${playerImage}.png`);
            resultDisplay.innerHTML = result;
            incrementComputerScore();
            incrementPlayerScore();
        
        })
    }
})





function generateComputerSelection(){
    if(rNum == 0)
    {
        compImage= 'rock';
    } else  if(rNum == 1)
    {
        compImage = 'paper';
    } else  if(rNum == 2)
    {
        compImage = 'scissor';
    }
}

function compareSelection(){

    if(playerImage == compImage)
    {
        result = "It's a tie game!";
    } else if (playerImage == 'scissor' && compImage == 'paper')
    {
     result = "You Win!";  
    }else if (playerImage == 'paper' && compImage == 'rock')
    {
     result = "You Win!" ;  
    }else if (playerImage == 'rock' && compImage == 'scissor')
    {
     result = "You Win!";   
    }else if (playerImage == 'scissor' && compImage == 'rock')
    {
     result = "Computer Wins!";  
    }else if (playerImage == 'rock' && compImage == 'paper')
    {
     result = "Computer Wins!";  
    }else if (playerImage == 'paper' && compImage == 'scissor')
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
    