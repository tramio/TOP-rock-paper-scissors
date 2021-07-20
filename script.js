const gameOptions = ["Rock", "Paper", "Scissors"];
let computerSelection;

function computerPlay() {
    computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    console.log(computerSelection);
}

computerPlay();