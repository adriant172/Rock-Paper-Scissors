function computerPlay() {
    // pick rock paper or scissors and  return a variable
    const options = ["rock", "paper", "scissors"];
    let currentPick = options[Math.floor(Math.random() * options.length)];
    return currentPick;
}

function playRound(playerSelection, computerSelection){
    // Compare the player and computer selections. Use the the rules of rock-paper-scissors to return a boolean result indicating wheter the player has won or lost.
    let win;
    playerSelection = playerSelection.toLowerCase();
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


    // playerWon = playRound(playerSelection, computerSelection);
    
    // console.log(resultResponse(playerWon, playerSelection, computerSelection));
    // if (playerWins > computerWins) {
    //     console.log(` You won ${playerWins} out of 5 rounds. You win the game!`);
    // } else if(playerWins < computerWins) {
    //     console.log(`You lost ${computerWins} out of 5 rounds . You Lose!`);
    // } else {
    //     console.log("Looks likes its tie! Thanks for playing.")
    // }


let playerWins = 0;
let computerWins = 0;


const buttons = document.querySelectorAll('button');
let playerScore = document.querySelector('#player>p')
let computerScore = document.querySelector('#computer>p')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerWon = playRound(button.textContent, computerPlay());
        if (playerWon === true) {
            playerWins++;
            playerScore.textContent = playerWins;
        }else if (playerWon === false) {
            computerWins++;
            computerScore.textContent = computerWins;
        }
    });
    console.log(button);
})


