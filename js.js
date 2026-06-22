// Create function getComputerChoice 
function getComputerChoice() {
    // Get random variable between 1 (including) and 3 (including) using Math.random() and floor functions
    let random = Math.floor( Math.random() * 3 ) + 1;
    // Create conditional statements that depending on the random variable return rock or paper or scissors
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

// Create function getHumanChoice 
function getHumanChoice() {
    // Prompt the user to get the users choice and store it in a variable called humanChoice
    let humanChoice = prompt("Choose between rock, paper, scissors:", "");
    // Return the humans choice
    return humanChoice;
}

// Create humanScore and computerScore variables
let humanScore = 0;
let computerScore = 0;

// Create playRound function with parametrs humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    // Convert humanChoice to lowercase
    humanChoice = humanChoice.toLowerCase();
    // Make conditionals representing the ways the human can lose or win
    if (humanChoice === "rock" && computerChoice === "rock") {
        return "Tie";
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        return "You lose. Paper beats rock";
        computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win. Rock beats scissors";
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win. Paper beats rock";
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "paper") {
        return "Tie";
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose. Scissors beats rock.";
        computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose. Rock beats scissors.";
        computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win. Scissors beats paper.";
        humanScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "Tie";
    }
}

// Create humanSelection and computerSelection variables
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
