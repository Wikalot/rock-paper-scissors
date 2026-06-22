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

// Create function playGame
function playGame() {
    // Create humanScore and computerScore variables
    let humanScore = 0;
    let computerScore = 0;

    // Create function playRound with parametrs humanChoice and computerChoice
    function playRound(humanChoice, computerChoice) {
        // Convert humanChoice to lowercase
        humanChoice = humanChoice.toLowerCase();
        // Make conditionals representing the ways the human can lose or win
        if (humanChoice === "rock" && computerChoice === "rock") {
            window.alert("Tie.");
            return "Tie.";
        }
        if (humanChoice === "rock" && computerChoice === "paper") {
            window.alert("You lose. Paper beats rock.");
            computerScore++;
            return "You lose. Paper beats rock.";
        }
        if (humanChoice === "rock" && computerChoice === "scissors") {
            window.alert("You win. Rock beats scissors.");
            humanScore++;
            return "You win. Rock beats scissors.";
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            window.alert("You win. Paper beats rock.");
            humanScore++;
            return "You win. Paper beats rock.";
        }
        if (humanChoice === "paper" && computerChoice === "paper") {
            window.alert("Tie");
            return "Tie";
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            window.alert("You lose. Scissors beats rock.");
            computerScore++;
            return "You lose. Scissors beats rock.";
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            window.alert("You lose. Rock beats scissors.");
            computerScore++;
            return "You lose. Rock beats scissors.";
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            window.alert("You win. Scissors beats paper.");
            humanScore++;
            return "You win. Scissors beats paper.";
        }
        if (humanChoice === "scissors" && computerChoice === "scissors") {
            window.alert("Tie.");
            return "Tie.";
        }
    }
    // Create loop that plays 5 rounds
    for(let i = 0; i < 5; i++){
        // Create humanSelection and computerSelection variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        window.alert(`You win the game! Your score: ${humanScore}, computer score: ${computerScore}`);
    }
    if (humanScore < computerScore) {
        window.alert(`You lose the game! Your score: ${humanScore}, computer score: ${computerScore}`);
    }
    if (humanScore == computerScore) {
        window.alert(`Tie! Your score: ${humanScore}, computer score: ${computerScore}`);
    }
}



