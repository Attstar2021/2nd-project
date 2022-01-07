/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/
const button = document.getElementById("control");
const computerScore = document.getElementById("comp-score");
const playerScore = document.getElementById("player-score");
const resultsDisplay = document.getElementById("results");
const computerImage = getElementById("comp-image");
const playerImage = getElementById("player-image");
const choices = ["rock", "paper", "scissors"]

/**Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice");
        playGame("playerChoice");
    });
}

/**Main game funtion*/
function playGame (playerChoice){
    playerImage.scr = `assets/images/${choice[playerChoice]}.png`;
    playerImage.alt = choices [playerChoice]
}


let computerChoice = Math.floor(Math.random()  * 3);
computerImage.scr = `assets/images/${choices[computerChoice]}.png`;
computerImage.alt = choices[computerChoice]

let results = checkWinner(choices[computerChoice],choices[playerChoice]);

updatescores(results);

