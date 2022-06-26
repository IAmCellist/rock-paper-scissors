let playerWins = 0;
let computerWins = 0;

const body = document.querySelector("body");
const playerDiv = document.querySelector(".player");
const compDiv = document.querySelector(".computer");

const score = document.querySelector(".score");
const compScore = document.querySelector(".compScore");
const playerScore = document.querySelector(".playerScore");
compScore.textContent = `${computerWins}`;
playerScore.textContent = ` ${playerWins}`;

playerDiv.append(playerScore);
compDiv.append(compScore);
body.appendChild(score);

const playerIcon = document.querySelector(".playerIcon");
const compIcon = document.querySelector(".compIcon");

playerDiv.appendChild(playerIcon);
compDiv.appendChild(compIcon);

const content = document.querySelector(".content");
const roundText = document.querySelector(".roundText");

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => playRound("rock", computerPlay()));

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => playRound("paper", computerPlay()));

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => playRound("scissors", computerPlay()));

body.appendChild(roundText);
content.append(rockButton, paperButton, scissorsButton);
body.appendChild(content);

const overlay = document.getElementById("overlay");
const h3overlay = document.getElementById("h3overlay");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => resetGame());

overlay.append(h3overlay, reset);
body.append(overlay);

const footer = document.querySelector(".footer");
body.appendChild(footer);

function overlayOn() {
    document.getElementById("overlay").setAttribute("style","display: flex;");
}

function overlayOff() {
    document.getElementById("overlay").setAttribute("style", "display: none;");
}

function checkGame() {
    if (playerWins === 5 || computerWins === 5) {
        overlayOn();
        if (playerWins === 5) {
            h3overlay.textContent = "Player wins!";
        }
        if (computerWins == 5) {
            h3overlay.textContent = "Computer wins!";
        }
        
    }
}

function resetGame() {
    playerWins = 0;
    playerScore.textContent = `${playerWins}`;
    computerWins = 0;
    compScore.textContent = `${computerWins}`;
    roundText.textContent = "Choose your move!";
    overlayOff();
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
        compIcon.textContent = String.fromCodePoint(128196);
        return "paper";
    }
    compIcon.textContent = String.fromCodePoint(0x2702);
    return "scissors";
}

/* Plays a round of rock, paper, scissors.
*/
function playRound(playerSelection, computerSelection) {
    displayIcon(playerSelection, true);
    displayIcon(computerSelection, false);
    let roundResult = "";
    if (playerSelection === computerSelection) {
        roundResult = "tie";
    }
    else {
        roundResult = compareSelection(playerSelection, computerSelection);
        updateScore(roundResult);
    }
    updateRoundText(roundResult, playerSelection, computerSelection);
    checkGame();
}

function displayIcon(choice, player) {
    if (player) {
        if (choice === "rock") playerIcon.textContent = String.fromCodePoint(129704);
        if (choice === "paper") playerIcon.textContent = String.fromCodePoint(128196); 
        if (choice === "scissors") playerIcon.textContent = String.fromCodePoint(0x2702); 
    }
    else {
        if (choice === "rock") compIcon.textContent = String.fromCodePoint(129704);
        if (choice === "paper") compIcon.textContent = String.fromCodePoint(128196); 
        if (choice === "scissors") compIcon.textContent = String.fromCodePoint(0x2702); 
    }

}

function updateScore(roundResult, playerSelection, computerSelection) {
    if (roundResult === "win") {
        playerWins++;
        playerScore.textContent = `${playerWins}`;
    }
    if (roundResult === "lose") {
        computerWins++;
        compScore.textContent = `${computerWins}`;
    }
}

function updateRoundText(roundResult, playerSelection, computerSelection) {
    if (roundResult === "win") {
        roundText.textContent = `Win, ${playerSelection} beats ${computerSelection}!`;
    }
    if (roundResult === "lose") {
        roundText.textContent = `Lose, ${computerSelection} beats ${playerSelection}!`;
    }
    if (roundResult === "tie") {
        roundText.textContent = "Tie!";
    }
}

/* Compares the player's selection and the computer's selection
 * to determine which choice wins the round. 
*/
function compareSelection(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                return "lose";
            }
            if (computerSelection === "scissors") {
                return "win";
            }   
            break;
                
        case "paper":
            if (computerSelection === "rock") {
                return "win";
            }
            if (computerSelection === "scissors") {
                return "lose"
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                return "lose";
            }
            if (computerSelection === "paper") {
                return "win";
            }
            break;
        default:
            alert("Error! Please enter a valid choice.");
            break;
    } 
}