// The Odin Project: Rock Paper Scissors
// Alex Tresselt 6-12-22

// Randomly returns "rock", "paper", or "scissors"
function computerPlay() {
    const selections = ["rock", "paper", "scissors"];
    return selections[Math.floor(Math.random() * selections.length)];
}

// Given a playerSelection and computerSelection, return the winner
// as a string.
// ex. playRound("scissors", "rock") -> "You Lose! Paper beats Scissors"
function playRound(playerSelection, computerSelection) {
    let choice = playerSelection.toLowerCase();

    if (choice === computerSelection) {
        return "Tie! You both chose " + computerSelection;
    } 

    switch (choice) {
        case "rock":
            switch (computerSelection) {
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You Win! Rock beats Scissors";
                default:
                    return "Error: Computer Selection not found";
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock";
                case "scissors":
                    return "You Lose! Scissors beats Paper";
                default:
                    return "Error: Computer Selection not found";
            }
        case "scissors":
            switch (computerSelection) {
                case "paper":
                    return "You Win! Scissors beats Paper";
                case "rock":
                    return "You Lose! Rock beats Scissors";
                default:
                    return "Error: Computer Selection not found";
            }
        default:
            return "Error: Player Selection not found";
    }
    return "Error: No Moves Found";
}

// Plays a 5 round game, keeps score and reports winner and loser at the end
function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let player = prompt("Enter your choice: rock, paper, or scissors");
        let result = playRound(player, computerPlay());
        console.log(result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        } else { // a tie or error has occurred
        }
    }

    if (playerScore >= computerScore) {
        return "Player " + playerScore + ":" + computerScore + " Computer = You Win!";
    } else {
        return "Player " + playerScore + ":" + computerScore + " Computer = You Lose!";
    }
}

console.log(game());

