/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/
var rNum;
var result;
var computerChoice;
var UserChoice;
let oldScore = undefined;

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const resultDisplay = document.getElementById("result");
const computerSelection = document.getElementById("compImage");
const playerSelection = document.getElementById("playerImage");
const possibleSelections = document.getElementsByTagName("button");

document.addEventListener("DOMContentLoaded", function(){

possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', e => 
{
    playerImage = e.target.dispatchEvent;
    rNum = Math.floor(Math.random() * 3) + 1;
    generateComputerSelection();
    compareSelection();
    computerSelection.innerHTML = '<img src ="assets/images/'+ computerChoice + '.png">';
    playerSelection.innerHTML = '<img src ="assets/images/' + playerChoice + '.png">';
    displayResults.innerHTML = result;
    incrementComputerScore();
    incrementPlayerScore();


}));

function generateComputerSelection(){
    if(rNum == 0)
    {
        computerChoice= 'rock';
    } else  if(rNum == 1)
    {
        computerChoice = 'paper';
    } else  if(rNum == 2)
    {
        computerChoice = 'scissors';
    }
}

function compareSelection(){

    if(playerChoice == computerChoice)
    {
        result = "It's a tie game!";
    } else if (playerChoice == 'scissors' && computerChoice == 'paper')
    {
     result = "You Win!";  
    }else if (playerChoice == 'paper' && computerChoice == 'rock')
    {
     result = "You Win!" ;  
    }else if (playerChoice == 'rock' && computerChoice == 'scissors')
    {
     result = "You Win!";   
    }else if (playerChoice == 'scissors' && computerChoice == 'rock')
    {
     result = "Computer Wins!";  
    }else if (playerChoice == 'rock' && computerChoice == 'paper')
    {
     result = "Computer Wins!";  
    }else if (playerChoice == 'paper' && computerChoice == 'scissors')
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