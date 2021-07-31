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

    let initialNarration = document.createElement("p");
    initialNarration.textContent = "You went for " + playerSelection + ". Wise choice. Your opponent chose " + computerSelection + "! What a surprise!!!";
    divResults.appendChild(initialNarration);

    let intermediaryNarration = document.createElement("p");

    if (playerSelection == "rock") {
        switch (computerSelection) {
        case "rock":
            intermediaryNarration.textContent = equaMessage;
            break;
        case "paper":
            intermediaryNarration.textContent = loseMessage;
            computerScore += 1;
            break;
        case "scissors":
            intermediaryNarration.textContent = winMessage;
            playerScore += 1;
            break;
        default:
            intermediaryNarration.textContent = defaultMessage;
            break;
    }}
    else if (playerSelection == "paper") {
        switch (computerSelection) {
        case "rock":
            intermediaryNarration.textContent = winMessage;
            playerScore += 1;
            break;
        case "paper":
            intermediaryNarration.textContent = equaMessage;
            break;
        case "scissors":
            intermediaryNarration.textContent = loseMessage;
            computerScore += 1;
            break;
        default:
            intermediaryNarration.textContent = defaultMessage;
            break;
    }}
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
        case "rock":
            intermediaryNarration.textContent = loseMessage;
            computerScore += 1;
            break;
        case "paper":
            intermediaryNarration.textContent = winMessage;
            playerScore += 1;
            break;
        case "scissors":
            intermediaryNarration.textContent = equaMessage;
            break;
        default:
            intermediaryNarration.textContent = defaultMessage;
            break;
    }}
    divResults.appendChild(intermediaryNarration);
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

const divResults = document.querySelector("#results");