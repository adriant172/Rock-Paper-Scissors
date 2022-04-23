function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let currentPick = options[Math.floor(Math.random() * options.length)];
    return currentPick;
}

console.log(computerPlay());