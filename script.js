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

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! No points given.")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}. You gain one point.`);
    } else {
        computerScore++;
        console.log(`You Lose ${computerChoice} beats ${humanChoice}. Computer gains one point.`);
    }
}

for (let i = 0; i < 5; i += 1) {
    playRound(getHumanChoice(), getComputerChoice());
}
}

