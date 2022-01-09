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
var playerImage;
var compImage;


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
        
        });
    }
});





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
        draw();
    } else if (playerImage == 'scissor' && compImage == 'paper')
    {
     result = "You Win!"; 
     incrementPlayerScore();

    }else if (playerImage == 'paper' && compImage == 'rock')
    {
     result = "You Win!" ;
     incrementPlayerScore();

    }else if (playerImage == 'rock' && compImage == 'scissor')
    {
     result = "You Win!"; 
     incrementPlayerScore();

    }else if (playerImage == 'scissor' && compImage == 'rock')
    {
     result = "Computer Wins!"; 
     incrementComputerScore();
    }else if (playerImage == 'rock' && compImage == 'paper')
    {
     result = "Computer Wins!";
    incrementComputerScore(); 
    }else if (playerImage == 'paper' && compImage == 'scissor')
    {
     result = "Computer Wins!"; 
    incrementComputerScore(); 
    }
    resultDisplay.innerHTML=result;
    }



    function incrementPlayerScore(){
        let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldPlayerScore;
        incrementComputerScore.innerHTML =computerScore;
    }
    
    
    function incrementComputerScore(){
        let oldCompScore =parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldCompScore;
        incrementPlayerScore = playerScore;
    }
    function draw(){
        let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldPlayerScore;
        let oldCompScore =parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldCompScore;
    }