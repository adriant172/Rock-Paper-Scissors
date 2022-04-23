function computerPlay(options) {
    let currentPick = options[Math.floor(Math.random() * options.length)];
    return currentPick;
}

function playRound(playerSelection, computerSelection){
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
    } else {
        return
    }
    return win;
}
 
function resultResponse (playerWon){
    if (playerWon === true) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerWon === false) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return " It's a Tie!";
    }
}

function game() {
    const options = ["rock", "paper", "scissors"];
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        computerSelection = computerPlay(options);
        let notValid = true;
        while (notValid) {
            let playerSelection = prompt("Please type in your play: ");
            playerSelection = playerSelection.toLowerCase();
            if (options.indexOf(playerSelection) == -1){
                alert("Not a valid option. Please try again..");
            } else {
                notValid = false;
            }
        }
        playerWon = playRound(playerSelection, computerSelection);
        console.log(resultResponse(playerWon));
    }
}





// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
