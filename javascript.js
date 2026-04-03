function getComputerChoice() {
    //Get random integer among 0, 1 or 2 that will be used as rock, paper or scissors
    let computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getPlayerChoiceByBtnId(btnId) {
    switch (btnId) {
        case "rock-btn":
            return "rock";
        case "paper-btn":
            return "paper";
        case "scissors-btn":
            return "scissors";
        default:
            return "ERROR: Invalid button id!";
    }
}

function restartGame(event) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    compScoreDisplay.textContent = "0";
    event.target.parentNode.removeChild(event.target);  // remove restart button
    // add back the rock, paper, scissors action buttons
    btnContainer.appendChild(rock);
    btnContainer.appendChild(paper);
    btnContainer.appendChild(scissors);

    gameMsg.textContent = "";
}

function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function endGame() {
    let endMsg = "";
    if (playerScore > computerScore) {
        endMsg = "You win the game! Congratulations!";
    } else {
        endMsg = "You Lost! Game Over...";
    }

    gameMsg.textContent = endMsg;
    console.log(endMsg);

    btnContainer.removeChild(rock);
    btnContainer.removeChild(paper);
    btnContainer.removeChild(scissors);
    btnContainer.appendChild(restartBtn);
}

function playRound(eventBtn) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoiceByBtnId(eventBtn.target.id);
    let message = "";

    if (playerSelection === computerSelection) {
        message = "Tie! One More Time!";
        // Keep Playing in Case of Tie
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            compScoreDisplay.textContent = computerScore;
            message = "You Lose! Paper beats Rock!";

        } else if (computerSelection === 'scissors') {
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            message = "You Win! Rock beats Scissisors!"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            message = "You Win! Paper beats Rock!";
        } else if (computerSelection === 'scissors') {
            computerScore += 1;
            compScoreDisplay.textContent = computerScore;
            message = "You Lose! Scissors beat Paper!"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            compScoreDisplay.textContent = computerScore;
            message = "You Lose! Rock beats Scissors!"
        } else if (computerSelection === 'paper') {
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            message = "You Win! Scissors beat Paper!";
        }
    }
    gameMsg.textContent = message;

    if (isGameOver()) {
        endGame();
    }
}

let computerScore = 0;
let playerScore = 0;
let gameResult = 0;

const playerScoreDisplay = document.querySelector("#player-score")
const compScoreDisplay = document.querySelector("#computer-score");
const gameMsg = document.querySelector("#game-message");

const btnContainer = document.querySelector("#btn-container");
const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

let roundResult = 0;

const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
restartBtn.addEventListener("click", restartGame);
