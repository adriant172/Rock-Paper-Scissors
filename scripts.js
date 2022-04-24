function computerPlay(options) {
    // pick rock paper or scissors and  return a variable 
    let currentPick = options[Math.floor(Math.random() * options.length)];
    return currentPick;
}

function playRound(playerSelection, computerSelection){
    // Compare the player and computer selections. Use the the rules of rock-paper-scissors to return a boolean result indicating wheter the player has won or lost.
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
    return win;
}
 
function resultResponse (playerWon, playerSelection, computerSelection) {
    // Returns a message indicating the result of a game round using the boolean provided from the playRound function
    if (playerWon === true) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerWon === false) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return " It's a Tie!";
    }
}

function game() {
    // Run the playRound function 5 times
    const options = ["rock", "paper", "scissors"];
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay(options);
        let playerSelection;
        let notValid = true;
        // Continue to prompt the user for an input until they provide the correct input
        while (notValid) {
            playerSelection = prompt("Please enter rock, paper or scissors: ");
            playerSelection = playerSelection.toLowerCase();
            if (options.indexOf(playerSelection) == -1){
                alert("Not a valid option. Please try again..");
            } else {
                notValid = false;
            }
        }
        playerWon = playRound(playerSelection, computerSelection);
        if (playerWon === true) {
            playerWins++;
        }else if (playerWon === false) {
            computerWins++;
        }
        console.log(resultResponse(playerWon, playerSelection, computerSelection));
    }
    if (playerWins > computerWins) {
        console.log(` You won ${playerWins} out of 5 rounds. You win the game!`);
    } else if(playerWins < computerWins) {
        console.log(`You lost ${computerWins} out of 5 rounds . You Lose!`);
    } else {
        console.log("Looks likes its tie! Thanks for playing.")
    }
}

game();