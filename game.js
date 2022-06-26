
game();

function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        let playerSelection = prompt("Please choose rock, paper, or scissors: ");
        let roundResult = playRound(playerSelection.toLowerCase(), computerPlay());
        if (roundResult === "win") {
            playerWins++;
        }
        if (roundResult === "lose") {
            computerWins++;
        }
    }

    if (playerWins === 5) {
        alert("Player wins! Congrats!");
    }
    else {
        alert("Computer wins! Better luck next time!");
    }
}

/* Randomly chooses an integer between 0 and 2 (inclusive)
* corresponding to the computer's choice of rock, paper, or scissors.
*/
function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "rock";
    }
    if (compChoice === 1) {
        return "paper";
    }
    return "scissors";
}

/* Plays a round of rock, paper, scissors.
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Tie!");
        return "tie";
    }
    else {
        return compareSelection(playerSelection, computerSelection);
    }
}

/* Compares the player's selection and the computer's selection
 * to determine which choice wins the round. 
*/
function compareSelection(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                alert("Paper beats rock, you lose!");
                return "lose";
            }
            if (computerSelection === "scissors") {
                alert("Rock beats scissors, you win!");
                return "win";
            }   
            break;
                
        case "paper":
            if (computerSelection === "rock") {
                alert("Paper beats rock, you win!");
                return "win";
            }
            if (computerSelection === "scissors") {
                alert("Scissors beats paper, you lose!");
                return "lose"
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                alert("Rock beats scissors, you lose!");
                return "lose";
            }
            if (computerSelection === "paper") {
                alert("Scissors beats paper, you win!");
                return "win";
            }
            break;
        default:
            alert("Error! Please enter a valid choice.");
            break;
    } 
}