const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

const narrationDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#scoreDiv");

let choices = document.createElement("p");
narrationDiv.appendChild(choices);

let outcome = document.createElement("p");
narrationDiv.appendChild(outcome);

let intermediaryScore = document.createElement("p");
scoreDiv.appendChild(intermediaryScore);

const startBtn = document.querySelector("#startGame");
startBtn.addEventListener("click", () => {
    let greetingDiv = document.querySelector(".greetingDiv");
    narrationDiv.removeChild(greetingDiv);
    createButtons();
});

function createButtons() {
    const buttonsDiv = document.createElement("div");
    narrationDiv.appendChild(buttonsDiv);
    for (i = 0; i < 3; i++) {
        const newBtn = document.createElement("button");
        newBtn.classList.add("gameOptions", "buttons");
        newBtn.textContent = gameOptions[i];
        newBtn.value = gameOptions[i];
        newBtn.addEventListener("click", () => playRound(newBtn.value));
        buttonsDiv.appendChild(newBtn);
    }
}

function disableButtons() {
    playerScore > computerScore ? narrationDiv.textContent = "yo u won": narrationDiv.textContent = "lol u lost";
    const replayBtn = document.createElement("button");
    replayBtn.classList.add("buttons");
    replayBtn.textContent = "Play again!";
    replayBtn.addEventListener("click", () => createButtons());
    narrationDiv.appendChild(replayBtn);
}

function playRound(playerSelection) {
    round++;
    let computerSelection;
    function computerPlay() {
        computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    }

    computerPlay();

    let winMessage = "You won; " + playerSelection + " beats " + computerSelection + "!";
    let loseMessage = "You lost; " + computerSelection + " beats " + playerSelection + "!";
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
                computerScore++;
                break;
            case "scissors":
                outcome.textContent = winMessage;
                playerScore++;
                break;
            default:
                outcome.textContent = defaultMessage;
                break;
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                outcome.textContent = winMessage;
                playerScore++;
                break;
            case "paper":
                outcome.textContent = equaMessage;
                break;
            case "scissors":
                outcome.textContent = loseMessage;
                computerScore++;
                break;
            default:
                outcome.textContent = defaultMessage;
                break;
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                outcome.textContent = loseMessage;
                computerScore++;
                break;
            case "paper":
                outcome.textContent = winMessage;
                playerScore++;
                break;
            case "scissors":
                outcome.textContent = equaMessage;
                break;
            default:
                outcome.textContent = defaultMessage;
                break;
        }
    }
    
    intermediaryScore.textContent = "This was round " + round + ". You: " + playerScore + ". Your opponent: " + computerScore + ".";
    if (computerScore == 5 || playerScore == 5) {
        disableButtons();
        showWinner();
    }
}

let finalScore = document.createElement("p");
narrationDiv.appendChild(finalScore);

function showWinner() {
    if (playerScore == computerScore) {
        finalScore.textContent = "Well, it's a draw.";
    }
    else if (playerScore > computerScore) {
        finalScore.textContent = "You won this game!";
    }
    else {
        finalScore.textContent = "You lost this game!";
    }
}