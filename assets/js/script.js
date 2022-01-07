/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const resultsDisplay = document.getElementById("results");
const computerImage = document.getElementById("computer-image");
const playerImage = document.getElementById("player-image");
const choices = ["rock", "paper", "scissors"]
let buttons = document.getElementsByTagName("button");




/**Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function(){
        if(this,getAttribute("data-choice")==="0"){
            displayImage.scr(assets/images/rock1.png)
        } else if(this,getAttribute("data-choice")==="1"){
            displayImage.scr(assets/images/paper.png)
        } else if(this,getAttribute("data-choice")==="2"){
            displayImage.scr(assets/images/Scissors1.png)
        let playerChoice = this.getAttribute("data-choice");
        playGame("playerChoice");
    
}



/**Main game funtion*/

function playGame (playerChoice){
    playerImage.scr = `assets/images/${choice[playerChoice]}.png`;
    playerImage.alt = choices [playerChoice]
}


let computerChoice = choices[Math.floor(Math.random()  * 3 + 1)]
computerImage.scr = `assets/images/${choices[computerChoice]}.png`;
computerImage.alt = choices[computerChoice]

let results = resultsDisplay(choices[computerChoice],choices[playerChoice]);

updatescores(results);

