const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

const divResults = document.querySelector("#results");

let choices = document.createElement("p");
divResults.appendChild(choices);

let outcome = document.createElement("p");
divResults.appendChild(outcome);

let intermediaryScore = document.createElement("p");
divResults.appendChild(intermediaryScore);

function playRound(playerSelection) {
    round++;
    let computerSelection;
    function computerPlay() {
        computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    }

    computerPlay();

    let winMessage = "You won! " + playerSelection + " beats " + computerSelection + "!";
    let loseMessage = "You lost! " + computerSelection + " beats " + playerSelection + "!";
    let equaMessage = "It's a tie! Keep going!";
    let defaultMessage = "Your opponent broke! Someone must fix this game!";

    choices.textContent = "You went for " + playerSelection + ". Wise choice. Your opponent chose " + computerSelection + "! What a surprise!!!";

    if (playerSelection == "rock") {
        switch (computerSelection) {
        case "rock":
            outcome.textContent = equaMessage;
            break;
        case "paper":
            outcome.textContent = loseMessage;
            computerScore += 1;
            break;
        case "scissors":
            outcome.textContent = winMessage;
            playerScore += 1;
            break;
        default:
            outcome.textContent = defaultMessage;
            break;
    }}
    else if (playerSelection == "paper") {
        switch (computerSelection) {
        case "rock":
            outcome.textContent = winMessage;
            playerScore += 1;
            break;
        case "paper":
            outcome.textContent = equaMessage;
            break;
        case "scissors":
            outcome.textContent = loseMessage;
            computerScore += 1;
            break;
        default:
            outcome.textContent = defaultMessage;
            break;
    }}
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
        case "rock":
            outcome.textContent = loseMessage;
            computerScore += 1;
            break;
        case "paper":
            outcome.textContent = winMessage;
            playerScore += 1;
            break;
        case "scissors":
            outcome.textContent = equaMessage;
            break;
        default:
            outcome.textContent = defaultMessage;
            break;
    }}
    intermediaryScore.textContent = "This was round " + round + ". You: " + playerScore + ". Your opponent: " + computerScore + ".";
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