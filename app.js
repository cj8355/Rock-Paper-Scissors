// linking the HTML elments in the JS file
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

// declaring userChoice variable to be used in the forEach loop below to get the user's button click
let userChoice;

// declaring computerChoice variable to be used in the generate computer choice function to get the computers choice
let computerChoice;

// declaring result variable to be used in the get result function
let result


// Iterating through the possible choices, rock, paper, scissors and displaying on the page the user's choice on event click
// invoking the computer's choice function
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

// creating the generate computer choice function to ranomly generate the computers choice
function generateComputerChoice() {
    // generating a random number between 1 and 3(or possibleChoices.length)
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);

    // creating if statements to return a string value(rock, paper, scissors) for the computers random numerical(1,2,3) choice
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    // displaying the computer's choice on the page
    computerChoiceDisplay.innerHTML = computerChoice;
};

// get result function determines the winner of the game
function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost"
    }
    // render the result of the game to the page
    resultDisplay.innerHTML = result;
    
};