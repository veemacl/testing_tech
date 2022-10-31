/* Constants */

const possibleChoices = document.querySelectorAll("button");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("com-choice");
const resultSpan = document.getElementById("result");

/* Variables */

let userChoice;
let comChoice;
let result;

/* Functions */
// Add event listener to button
possibleChoices.forEach((possibleChoice) =>
    // When button is pressed
    possibleChoice.addEventListener("click", (e) => {
        // Get button id value
        userChoice = e.target.id;
        // Display id in browser
        userChoiceSpan.innerHTML = userChoice;
        // Generate computer choice
        generateComChoice();
        // Get result
        generateResult();
    })
);

// Function to generate computer choice
function generateComChoice() {
    // Generate random number (> 0)
    let randomNum = Math.floor(Math.random() * 3) + 1;
    // Assigns random number to choice
    switch(randomNum) {
        case 1:
            comChoice = "rock";
            break;
        case 2:
            comChoice = "paper";
            break;
        case 3:
            comChoice = "scissors";
            break;
    }
    // Display id in browser
    computerChoiceSpan.innerHTML = comChoice;
}

function generateResult() {
    // Tie
    if (userChoice === comChoice) {
        result = "It's a tie!";
    }
    // Rock vs Paper
    else if ((userChoice === "rock") && (comChoice === "paper")) {
        result = "Computer wins!";
    }
    // Paper vs Rock
    else if ((userChoice === "paper") && (comChoice === "rock")) {
        result = "You win!";
    }
    // Paper vs Scissors
    else if ((userChoice === "paper") && (comChoice === "scissors")) {
        result = "Computer wins!";
    }
    // Scissors vs Paper
    else if ((userChoice === "scissors") && (comChoice === "paper")) {
        result = "You win!";
    }
    // Scissors vs Rock
    else if ((userChoice === "scissors") && (comChoice === "rock")) {
        result = "Computer wins!";
    }
    // Rock vs Scissors
    else if ((userChoice === "rock") && (comChoice === "scissors")) {
        result = "You win!";
    }
    // Display result in browser
    resultSpan.innerHTML = result;
}