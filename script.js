const gameOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

const narrationDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#scoreDiv");

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

    let winMessage = `You chose ${playerSelection}... and defeated your opponent's mighty ${computerSelection}!`;
    let loseMessage = `Oh no, you were struck by your opponent's ${computerSelection} as you were reaching for ${playerSelection}!`;
    let equaMessage = `It's a tie! Keep going!`;

    if (playerSelection == computerSelection) {
        outcome.textContent = equaMessage;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "rock")
    ) {
        outcome.textContent = winMessage;
        playerScore++;
    } else {
        outcome.textContent = loseMessage;
        computerScore++;
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