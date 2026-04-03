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

function getPlayerChoice() {
    playerSelection = prompt("Rock! Paper! Scissors!").toLowerCase();

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        console.log('Error! Enter Rock, Paper or Scissor!');
        return getPlayerChoice();
    }
    else {
        return playerSelection;
    }
}

/*
function playRound() {
    let playerSelection = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie! Rock vs Rock';
        } else if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock!';
        } else if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissisors!';
        }
    }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock!';
        } else if (computerSelection === 'paper') {
            return 'Tie! Paper vs Paper';
        } else if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beat Paper!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors!';
        } else if (computerSelection === 'paper') {
            return 'You Win! Scissors beat Paper!';
        } else if (computerSelection === 'scissors') {
            return 'Tie! Scissors vs Scissors';
        }
    }
}
*/

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
    event.target.parentNode.removeChild(event.target);
}

function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function endGame() {
    if (playerScore > computerScore) {
        console.log("You win the game! Congratulations!")
    } else {
        console.log('You Lost! Game Over...')
    }
    btnContainer.appendChild(restartBtn);
}

function playRound(eventBtn) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoiceByBtnId(eventBtn.target.id);

    // if (playerSelection === computerSelection) {
    //     console.log("Tie! One More Time!");
    //     // Keep Playing in Case of Tie
    //     return playRound();
    // }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            //return ['computer', 'You Lose! Paper beats Rock!']
            computerScore += 1;
            compScoreDisplay.textContent = computerScore;

        } else if (computerSelection === 'scissors') {
            //return ['player', 'You Win! Rock beats Scissisors!'];
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
        }
    }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            //return ['player', 'You Win! Paper beats Rock!'];
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
        } else if (computerSelection === 'scissors') {
            //return ['computer', 'You Lose! Scissors beat Paper!'];
            computerScore += 1;
            compScoreDisplay.textContent = computerScore;
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            //return ['computer', 'You Lose! Rock beats Scissors!'];
            computerScore += 1;
            compScoreDisplay.textContent = computerScore;
        } else if (computerSelection === 'paper') {
            //return ['player', 'You Win! Scissors beat Paper!'];
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
        }
    }

    if (isGameOver()) {
        endGame();
    }
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    let gameResult = 0;
    for (let i = 0; i < 5; i++) {
        gameResult = playRound();
        if (gameResult[0] === 'computer') {
            computerScore += 1;
        }
        else {
            playerScore += 1;
        }
        console.log(gameResult[1]);
    }

    if (playerScore > computerScore) {
        console.log("You win the game! Congratulations!")
    }
    else {
        console.log('You Lost! Game Over...')
    }
    
    console.log(`SCORE ---> You: ${playerScore}    Computer: ${computerScore}`);
}


//playGame();
//console.log(playRound());

let computerScore = 0;
let playerScore = 0;
let gameResult = 0;

const playerScoreDisplay = document.querySelector("#player-score")
const compScoreDisplay = document.querySelector("#computer-score");

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
