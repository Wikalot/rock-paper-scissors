const divRound = document.querySelector(".round");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let random = Math.floor( Math.random() * 3 ) + 1;

    if (random === 1) {
        return "rock";
    }
    if (random === 2) {
        return "paper";
    }
    if (random === 3) {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        divRound.textContent = "Tie. Your score:" + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
       divRound.textContent = "You lose. Paper beats rock. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        divRound.textContent = "You win. Rock beats scissors. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
        }
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        divRound.textContent = "You win. Paper beats rock. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
        divRound.textContent = "Tie Your score:" + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        divRound.textContent = "You lose. Scissors beats rock. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        divRound.textContent = "You lose. Rock beats scissors. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        divRound.textContent = "You win. Scissors beats paper. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
        divRound.textContent = "Tie. Your score: " + humanScore + " Computers score: " + computerScore;
        return;
    }
}


rockBtn.addEventListener("click", () => {
    let humanSelection = "rock";
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (computerScore == 5) {
        divRound.textContent = "The computer won. Your score: " + humanScore + " Computers score: " + computerScore;
        humanScore = 0;
        computerScore= 0;
    }
    else if (humanScore == 5) {
        divRound.textContent = "You won. Your score: " + humanScore + " Computers score: " + computerScore;
        humanScore = 0;
        computerScore= 0;
    }
});

paperBtn.addEventListener("click", () => {
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (computerScore == 5) {
        divRound.textContent = "The computer won. Your score: " + humanScore + " Computers score: " + computerScore;
        humanScore = 0;
        computerScore= 0;
    }
    else if (humanScore == 5) {
        divRound.textContent = "You won. Your score: " + humanScore + " Computers score: " + computerScore;
        humanScore = 0;
        computerScore= 0;
    }
});

scissorsBtn.addEventListener("click", () => {
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (computerScore == 5) {
        divRound.textContent = "The computer won. Your score: " + humanScore + " Computers score: " + computerScore;
        humanScore = 0;
        computerScore= 0;
    }
    else if (humanScore == 5) {
        divRound.textContent = "You won. Your score: " + humanScore + " Computers score: " + computerScore;
        humanScore = 0;
        computerScore= 0;
    }
});
