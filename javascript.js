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
        console.log('Error! Enter Rock, Paper or Scissor!')
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

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    if (playerSelection === computerSelection) {
        console.log("Tie! One More Time!");
        return playRound();
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock!';
        } else if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissisors!';
        }
    }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock!';
        } else if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beat Paper!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors!';
        } else if (computerSelection === 'paper') {
            return 'You Win! Scissors beat Paper!';
        }
    }
}

console.log(playRound());