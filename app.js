// linking the HTML elments in the JS file
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

// declaring variables for the rock, paper and scissors image and win/lose img
const userChoiceImg = document.createElement("img");
const computerChoiceImg = document.createElement("img");
const resultImg = document.createElement("img");

// declaring userChoice variable to be used in the forEach loop below to get the user's button click
let userChoice;

// declaring computerChoice variable to be used in the generate computer choice function to get the computers choice
let computerChoice;

// declaring result variable to be used in the get result function
let result;


// Iterating through the possible choices, rock, paper, scissors and displaying on the page the user's choice on event click
// invoking the computer's choice function
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    
    if (userChoice === 'rock') {
        userChoiceImg.src = './rock.png'
    }
    if (userChoice === 'paper') {
        userChoiceImg.src = './paper.png'
    }
    if (userChoice === 'scissors') {
        userChoiceImg.src = './scissors.png'
    }
    // userChoiceDisplay.innerHTML = userChoice;
    userChoiceImg.classList.add("user-choice-img");
    userChoiceDisplay.appendChild(userChoiceImg);
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
        computerChoiceImg.src = './rock.png';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
        computerChoiceImg.src = './scissors.png';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
        computerChoiceImg.src = './paper.png';
    }
    // displaying the computer's choice on the page
    // computerChoiceDisplay.innerHTML = computerChoice;
    computerChoiceImg.classList.add("computer-choice-img");
    computerChoiceDisplay.appendChild(computerChoiceImg);
};

// get result function determines the winner of the game
function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw";
        resultImg.src = "./draw.png";
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win";
        resultImg.src = "./winner.jfif";
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost";
        resultImg.src = "./lose.png";
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win";
        resultImg.src = "./winner.jfif";
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost";
        resultImg.src = "./lose.png";
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win";
        resultImg.src = "./winner.jfif";
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost";
        resultImg.src = "./lose.png";
    }
    // render the result of the game to the page
    // resultDisplay.innerHTML = result;
    resultImg.classList.add("result-img");
    resultDisplay.appendChild(resultImg);

    
};