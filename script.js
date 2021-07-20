const gameOptions = ["rock", "paper", "scissors"];
let computerSelection;

let playerSelection = prompt("Tell me your choice, adventurer!");
playerSelection = playerSelection.toLowerCase();

function computerPlay() {
    computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

computerPlay();

function playRound() {
    let winMessage = "You won! " + playerSelection + " beats " + computerSelection + "!";
    let loseMessage = "You lost! " + computerSelection + " beats " + playerSelection + "!";
    let equaMessage = "It's a tie! Keep going!";
    let defaultMessage = "I don't think I understood well, would you mind telling me again?"

    console.log("You went for " + playerSelection + ". Wise choice.","\n","Your opponent chose " + computerSelection + "! What a surprise!!!");

    if (playerSelection == "rock") {
        switch (computerSelection) {
        case "rock":
            console.log(equaMessage);
            break;
        case "paper":
            console.log(loseMessage);
            break;
        case "scissors":
            console.log(winMessage);
            break;
        default:
            console.log(defaultMessage);
            break;
    }}
    if (playerSelection == "paper") {
        switch (computerSelection) {
        case "rock":
            console.log(winMessage);
            break;
        case "paper":
            console.log(equaMessage);
            break;
        case "scissors":
            console.log(loseMessage);
            break;
        default:
            console.log(defaultMessage);
            break;
    }}
    if (playerSelection == "scissors") {
        switch (computerSelection) {
        case "rock":
            console.log(loseMessage);
            break;
        case "paper":
            console.log(winMessage);
            break;
        case "scissors":
            console.log(equaMessage);
            break;
        default:
            console.log(defaultMessage);
            break;
    }}
}

playRound();