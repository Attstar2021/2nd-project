/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/
const button = document.getElementById('control');
const computerScore = document.getElementById('comp-score');
const playerScore = document.getElementById('player-score');
const resultsDisplay = document.getElementById('results');
const computerImage = getElementById('computer-image');
const playerImage = getElementById('player-image');
const choice = ["rock", "paper", "scissors"]

/**Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice");
        playGame("playerChoice");
    });
}
