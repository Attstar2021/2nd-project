/*jshint esversion: 6 */
/* Constants for DOM elements and choices*/
const COMPUTER_SCORE_ELEM = document.getElementById("computer-score");
const PLAYER_SCORE_ELEM = document.getElementById("player-score");
const RESULT_DISPLAY = document.getElementById("result");
const COMPUTER_SELECTION = document.getElementById("compImage");
const PLAYER_SELECTION = document.getElementById("playerImage");

let rNum = 3;
let result= "some error has occured please contact the admin";
let playerImage= 'defaultPlayerImg.png';
let compImage = 'defaultCompImg.png';

/* Add event listener for all buttons*/
document.addEventListener("DOMContentLoaded", function(){
    let choices = document.getElementsByClassName("choices");
    for (let choice of choices){
        choice.addEventListener("click",  e => 
        {
            playerImage = e.currentTarget.id;
            console.log(playerImage);
            rNum = Math.floor(Math.random() * 3);
            generateComputerSelection();
            compareSelection();
            COMPUTER_SELECTION.setAttribute("src",`./assets/images/${compImage}.png`);
            PLAYER_SELECTION.setAttribute("src",`./assets/images/${playerImage}.png`);
            RESULT_DISPLAY.innerHTML = result;
        });
    }
});

/** Add computer selection method */
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

/** Add compare selection for results and score increment method */
function compareSelection(){
    
    if(playerImage === compImage){
        result = "It's a tie game!";
        draw();
    } else if (playerImage === 'scissor' && compImage === 'paper'){
     result = "You Win!"; 
     incrementPlayerScore();

    }else if (playerImage === 'paper' && compImage === 'rock'){
     result = "You Win!" ;
     incrementPlayerScore();
    }else if (playerImage === 'rock' && compImage === 'scissor'){
     result = "You Win!"; 
     incrementPlayerScore();
    }else if (playerImage === 'scissor' && compImage === 'rock'){
     result = "Computer Wins!"; 
     incrementComputerScore();
    }else if (playerImage === 'rock' && compImage === 'paper'){
     result = "Computer Wins!";
    incrementComputerScore(); 
    }else if (playerImage === 'paper' && compImage === 'scissor'){
     result = "Computer Wins!"; 
    incrementComputerScore(); 
    }
    RESULT_DISPLAY.innerHTML=result;
    }

/** Add score increment method for user and computer  */
function incrementPlayerScore(){
        let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldPlayerScore;
        incrementComputerScore.innerHTML =COMPUTER_SCORE_ELEM;
    }
    
function incrementComputerScore(){
        let oldCompScore =parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldCompScore;
        incrementPlayerScore.innerHTML = PLAYER_SCORE_ELEM;
    }

/** Create a draw function incase computer and player choice is same */
function draw(){
        let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
        document.getElementById("player-score").innerText = ++oldPlayerScore;
        let oldCompScore =parseInt(document.getElementById("computer-score").innerText);
        document.getElementById("computer-score").innerText = ++oldCompScore;
    }