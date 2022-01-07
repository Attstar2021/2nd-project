/** This code has been taken from rock, paper and scissors game of code institue */
/* Constants for DOM elements and choices
*/

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const resultsDisplay = document.getElementById("results");
const computerImage = document.getElementById("computer-image");
const playerImage = document.getElementById("player-image");
const choices = {
    "rock":"/assets/images/Rock1.png",
    "paper":"/assets/images/Rock1.png", 
    "scissors":"/assets/images/Rock1.png"
}
let playerchoice = choices
let buttons = document.getElementsByTagName("button");





/**Add event listener to buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function(){
        if(this.getAttribute("data-choice") === "0")
        playerImage = `assets/images/Rock1.png`
    });
}
