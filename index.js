function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    switch(rand){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function rockPaperScissorsRound(userInput = "") {
    let computerChoice = getComputerChoice();
    if(typeof userInput !== "string"){ return "That input is not a string. Please choose either 'Rock', 'Paper' or 'Scissors'."; }
    userInput = userInput.toLowerCase()
    
    if(userInput === computerChoice){ return `It's a draw! You both selected ${userInput}!`; }
    if(
        (userInput === 'rock' && computerChoice === 'scissors') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissors' && computerChoice === 'paper')
    ){ return `You won! Your ${userInput} beat the computer's ${computerChoice}!`; }
    if(
        (userInput === 'rock' && computerChoice === 'paper') ||
        (userInput === 'paper' && computerChoice === 'scissors') ||
        (userInput === 'scissors' && computerChoice === 'rock')
    ){ return `You lost... Your ${userInput} was beaten by the computer's ${computerChoice}.`; }
    
    return "That selection is invalid. Please choose either 'Rock', 'Paper' or 'Scissors'.";
}

function playRockPaperScissors(bestOf = 5){
    let score = 0;
    let gamesRemaining = bestOf;
    while(gamesRemaining > 0){
        let userInput = prompt("Please input Rock, Paper or Scissors.", "");
        userInput = userInput.toLowerCase()


        gamesRemaining--;
    }
    alert(`The game is over. You scored ${score} out of ${bestOf}!`);
}