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
    result = resultResponse(win, playerSelection, computerSelection)
    return {"win": win, "computerPick": computerSelection, "playerPick": playerSelection, "resultResponse": result};
}
 
function resultResponse (playerWon, playerSelection, computerSelection) {
    // Returns a message indicating the result of a game round using the boolean provided from the playRound function
    if (playerWon === true) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerWon === false) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return " It's a Tie! Try Again!!";
    }
}


let playerWins = 0;
let computerWins = 0;


const buttons = document.querySelectorAll('button');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let playerScore = document.querySelector('#player>p');
let computerScore = document.querySelector('#computer>p');
let displayResult = document.querySelector('#roundResult');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let roundResults = playRound(button.textContent, computerPlay());
        let playerPickImg = document.createElement('img');
        let computerPickImg = document.createElement('img');
        let currentImgs = document.querySelectorAll('.pickImg');
        currentImgs.forEach( img => {
            img.remove();
        })
        // Create pick image element corresponding with the players pick
        if (roundResults.playerPick === "rock") {
            playerPickImg.src = "images/rock-left.png";
        } else if (roundResults.playerPick === "paper") {
            playerPickImg.src = "images/paper-left.png";
        } else {
            playerPickImg.src = "images/Scissors-Left.png";
        }
        // Create pick image element corresponding with the computers pick
        if (roundResults.computerPick === "rock") {
            computerPickImg.src = "images/rock-right.png";
        } else if (roundResults.computerPick === "paper") {
            computerPickImg.src = "images/paper-right.png";
        } else {
            computerPickImg.src = "images/Scissors-right.png";
        }
        playerPickImg.classList.add('pickImg');
        computerPickImg.classList.add('pickImg');
        player.prepend(playerPickImg);
        computer.prepend(computerPickImg);
        if (roundResults.win === true) {
            playerWins++;
            playerScore.textContent = playerWins;
        }else if (roundResults.win === false) {
            computerWins++;
            computerScore.textContent = computerWins;
        }
        if (computerWins === 5 || playerWins === 5){
            // Clear all elements 
            const body = document.querySelector('body');
            let child = body.lastElementChild;
            while (child){
                body.removeChild(child);
                child = body.lastElementChild;
            }
            // Create Retry button and end game message
            const endMessage = document.createElement('div');
            endMessage.classList.add('endMessage')
            const restartbtn = document.createElement('button');
            restartbtn.textContent = "Play Again?";
            restartbtn.addEventListener('click', () => {
                location.reload();
            }, false);
            if (playerWins > computerWins) {
                endMessage.textContent = ` You won ${playerWins} out of 5 rounds. You win the game!`;
            } else if(playerWins < computerWins) {
                endMessage.textContent = `You lost ${computerWins} out of 5 rounds . You Lose!`;
            } else {
                endMessage.textContent = "Looks likes its tie! Thanks for playing.";
            }
            body.appendChild(endMessage);
            body.appendChild(restartbtn);
        
        }
        displayResult.textContent = roundResults.resultResponse;


    });
})


