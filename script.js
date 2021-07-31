const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let computerSelection;
    function computerPlay() {
        computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    }

    computerPlay();

    let winMessage = "You won! " + playerSelection + " beats " + computerSelection + "!";
    let loseMessage = "You lost! " + computerSelection + " beats " + playerSelection + "!";
    let equaMessage = "It's a tie! Keep going!";
    let defaultMessage = "Your opponent broke! Someone must fix this game!";

    console.log("You went for " + playerSelection + ". Wise choice.","\n","Your opponent chose " + computerSelection + "! What a surprise!!!");

    if (playerSelection == "rock") {
        switch (computerSelection) {
        case "rock":
            console.log(equaMessage);
            break;
        case "paper":
            console.log(loseMessage);
            computerScore += 1;
            break;
        case "scissors":
            console.log(winMessage);
            playerScore += 1;
            break;
        default:
            console.log(defaultMessage);
            break;
    }}
    else if (playerSelection == "paper") {
        switch (computerSelection) {
        case "rock":
            console.log(winMessage);
            playerScore += 1;
            break;
        case "paper":
            console.log(equaMessage);
            break;
        case "scissors":
            console.log(loseMessage);
            computerScore += 1;
            break;
        default:
            console.log(defaultMessage);
            break;
    }}
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
        case "rock":
            console.log(loseMessage);
            computerScore += 1;
            break;
        case "paper":
            console.log(winMessage);
            playerScore += 1;
            break;
        case "scissors":
            console.log(equaMessage);
            break;
        default:
            console.log(defaultMessage);
            break;
    }}
}

// for (let round = 1; round < 6; round++) {
//     playRound();
//     let finalNarration = "This was round " + round + ". You: " + playerScore + ". Your opponent: " + computerScore + ".";
//     console.log(finalNarration);
// }

function showWinner() {
    if (playerScore == computerScore) {
        console.log("Well, it's a draw.");
    }
    else if (playerScore > computerScore) {
        console.log("You won this game!");
    }
    else {
        console.log("You lost this game!");
    }
}

// showWinner();

const buttons = document.querySelectorAll(".gameOptions");
buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.value));
});