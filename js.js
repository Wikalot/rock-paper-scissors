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
