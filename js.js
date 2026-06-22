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

function getHumanChoice() {

    let humanChoice = prompt("Choose between rock, paper, scissors:", "");
    return humanChoice;

}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "rock") {
            window.alert("Tie.");
            return;
        }
        if (humanChoice === "rock" && computerChoice === "paper") {
            window.alert("You lose. Paper beats rock.");
            computerScore++;
            return;
        }
        if (humanChoice === "rock" && computerChoice === "scissors") {
            window.alert("You win. Rock beats scissors.");
            humanScore++;
            return;
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            window.alert("You win. Paper beats rock.");
            humanScore++;
            return;
        }
        if (humanChoice === "paper" && computerChoice === "paper") {
            window.alert("Tie");
            return;
        }
        if (humanChoice === "paper" && computerChoice === "scissors") {
            window.alert("You lose. Scissors beats rock.");
            computerScore++;
            return;
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            window.alert("You lose. Rock beats scissors.");
            computerScore++;
            return;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            window.alert("You win. Scissors beats paper.");
            humanScore++;
            return;
        }
        if (humanChoice === "scissors" && computerChoice === "scissors") {
            window.alert("Tie.");
            return;
        }

    }

    for(let i = 0; i < 5; i++){
   
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