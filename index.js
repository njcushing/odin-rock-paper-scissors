let playerScore = 0;
let computerScore = 0;
let firstTo = 5;

var buttons = document.querySelectorAll('.game-button');
buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked(e) {
  let objective = document.querySelector('.objective');
  let score = document.querySelector('.score');
  let result = document.querySelector('.result');
  
  result.textContent = playRockPaperScissors(e.target.textContent);

  if(playerScore == firstTo){
    score.textContent = `You beat the computer!: You ${playerScore} - ${computerScore} 
    Computer`;
    playerScore = 0;
    computerScore = 0;
  } else if(computerScore == firstTo){
    score.textContent = `You lost to the computer...: You ${playerScore} - ${computerScore} 
    Computer`;
    playerScore = 0;
    computerScore = 0;
  } else {
    score.textContent = `The current score is: You ${playerScore} - ${computerScore} 
    Computer`;
  }

  if(playerScore != 0 || computerScore != 0){
    objective.textContent = `The game is Rock, Paper, Scissors! First to five points
    wins.`;
  } else {
    objective.textContent = `The game is Rock, Paper, Scissors! First to five points
    wins. Start a new game by clicking one of the buttons below.`;
  }
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3)
  switch(rand){
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function playRockPaperScissors(userInput){
  userInput = userInput.toLowerCase()
  let computerChoice = getComputerChoice();
  
  if(userInput === computerChoice){
    return `It's a draw! You both selected ${userInput}!`;
  }
  if(
    (userInput === 'rock' && computerChoice === 'scissors') ||
    (userInput === 'paper' && computerChoice === 'rock') ||
    (userInput === 'scissors' && computerChoice === 'paper')
  ){
    playerScore++;
    return `You won! Your ${userInput} beat the computer's ${computerChoice}!`;
  }
  if(
    (userInput === 'rock' && computerChoice === 'paper') ||
    (userInput === 'paper' && computerChoice === 'scissors') ||
    (userInput === 'scissors' && computerChoice === 'rock')
  ){
    computerScore++;
    return `You lost... Your ${userInput} did not beat the computer's ${computerChoice}.`;
  }
}