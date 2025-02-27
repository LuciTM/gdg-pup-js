// ========== DOM ELEMENTS ==========
// Grab the necessary elements using getElementById or querySelector
let startButton = document.getElementById("startButton"); // using getElementById
let userChoiceDisplay = document.querySelector("#userChoice"); // using querySelector
let computerChoiceDisplay = document.querySelector("#computerChoice"); // grab the computerChoice id
let resultDisplay = document.querySelector("#result"); // grab the result id
let winsDisplay = document.querySelector("#wins"); // grab the wins id
let lossesDisplay = document.querySelector("#losses"); // grab the losses id
let tiesDisplay = document.querySelector("#ties"); // grab the ties id

// ========== GAME STATE VARIABLES ==========
// Track the state of the game
let userChoice = ""; // Store the user's choice

// Track the score: wins, losses, and ties initialized to 0
let wins = 0;
let losses = 0; // initialize losses to 0
let ties = 0; // initialize ties to 0

// Available choices for the game
const choices = ["rock", "paper", "scissors"];

// ========== EVENT LISTENERS ==========
// Add event listeners to choice buttons
document.getElementById("rock").addEventListener("click", () => selectChoice("rock"));
document.getElementById("paper").addEventListener("click", () => selectChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => selectChoice("scissors"));

// Add event listener to the start button to call playGame function
document.getElementById("startButton").addEventListener("click", playGame);

// Add event listener to the reset button to call resetGame function
document.getElementById("resetButton").addEventListener("click", resetGame);

// ========== FUNCTIONS ==========
/**
 * Updates the user's choice and enables the Start button.
 */
function selectChoice(choice) {
    userChoice = choice;
    userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${choice}.png" alt="${choice}" class='choice--img'/>`;
    startButton.disabled = false;
}

/**
 * Generates a random choice for the computer.
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Determines the winner of the game.
 */
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw"; // It's a tie
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

/**
 * Updates the score based on the result of the game.
 */
function updateScore(result) {
    if (result === "win") {
        wins++;
        winsDisplay.textContent = wins;
    } else if (result === "lose") {
        losses++;
        lossesDisplay.textContent = losses;
    } else {
        ties++;
        tiesDisplay.textContent = ties;
    }
}

/**
 * Main game function triggered when the Start button is clicked.
 */
function playGame() {
    // Get the computer's choice
    const computerChoice = getComputerChoice();

    // Determine the winner
    const result = determineWinner(userChoice, computerChoice);

    // Update the UI with the computer's choice
    computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`;

    // Display the result
    if (result === "draw") {
        resultDisplay.textContent = "It's a Draw!";
    } else if (result === "win") {
        resultDisplay.textContent = "You Win!";
    } else {
        resultDisplay.textContent = "You Lose!";
    }

    // Update the score
    updateScore(result);
}

/**
 * Resets the game to its initial state.
 */
function resetGame() {
    userChoice = "";

    // Reset UI elements
    userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-user.png" alt="user" class="choice--img">`;
    computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-computer.png" alt="computer" class="choice--img">`;
    resultDisplay.textContent = "Choose your weapon!";

    // Reset scores
    wins = 0;
    losses = 0;
    ties = 0;

    // Update score displays
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;

    // Disable the Start button
    startButton.disabled = true;
}
