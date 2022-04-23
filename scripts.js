function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let currentPick = options[Math.floor(Math.random() * options.length)];
    return currentPick;
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let win;
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            win = false;
        } else if (computerSelection === "scissors") {
            win = true;
        } else {
            win = "Tie";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            win = true;
        } else if (computerSelection === "scissors") {
            win = false;
        } else {
            win = "Tie";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            win = false;
        } else if (computerSelection === "paper") {
            win = true;
        } else {
            win = "Tie";
        }
    }

    if (win === true) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (win === false) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return " It's a Tie!";
    }
}