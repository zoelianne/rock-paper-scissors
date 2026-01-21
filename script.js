function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return "rock";
    } else if (randomChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose your fighter! Choose rock, paper, or scissors to play");
    return choice;
}

console.log(getHumanChoice());