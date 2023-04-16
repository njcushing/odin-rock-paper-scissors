function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    switch(rand){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

var buttons = document.querySelectorAll('.game-button');
buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked(e) {
  console.log(e.target.textContent);
}



/* 

function rockPaperScissorsRound(userInput = "") {
    let computerChoice = getComputerChoice();
    if(typeof userInput !== "string"){ console.log("That input is not a string. Please input 'Rock', 'Paper' or 'Scissors'."); return false; }
    userInput = userInput.toLowerCase()
    
    if(userInput === computerChoice){ console.log(`It's a draw! You both selected ${userInput}!`); return false; }
    if(
        (userInput === 'rock' && computerChoice === 'scissors') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissors' && computerChoice === 'paper')
    ){ console.log(`You won! Your ${userInput} beat the computer's ${computerChoice}!`); return true; }
    if(
        (userInput === 'rock' && computerChoice === 'paper') ||
        (userInput === 'paper' && computerChoice === 'scissors') ||
        (userInput === 'scissors' && computerChoice === 'rock')
    ){ console.log(`You lost... Your ${userInput} was beaten by the computer's ${computerChoice}.`); return false; }
    
    console.log("That selection is invalid. Please input 'Rock', 'Paper' or 'Scissors'.");
    return false;
}

function playRockPaperScissors(bestOf = 5){
    let score = 0;
    let gamesRemaining = bestOf;
    while(gamesRemaining > 0){
        let userInput = prompt(`Game ${bestOf - gamesRemaining + 1} of ${bestOf}\nPlease input Rock, Paper or Scissors.`, "");
        if(userInput === null){ console.log("The game was cancelled."); return; }
        userInput = userInput.toLowerCase()
        let computerChoice = getComputerChoice();
        
        if(userInput === computerChoice){
            alert(`It's a draw! You both selected ${userInput}!`);
            gamesRemaining--;
            continue;
        }
        if(
            (userInput === 'rock' && computerChoice === 'scissors') ||
            (userInput === 'paper' && computerChoice === 'rock') ||
            (userInput === 'scissors' && computerChoice === 'paper')
        ){
            alert(`You won! Your ${userInput} beat the computer's ${computerChoice}!`);
            score++;
            gamesRemaining--;
            continue;
        }
        if(
            (userInput === 'rock' && computerChoice === 'paper') ||
            (userInput === 'paper' && computerChoice === 'scissors') ||
            (userInput === 'scissors' && computerChoice === 'rock')
        ){
            alert(`You lost... Your ${userInput} was beaten by the computer's ${computerChoice}.`);
            gamesRemaining--;
            continue;
        }
        
        alert("That selection is invalid. Please input 'Rock', 'Paper' or 'Scissors'.");
    }
    alert(`The game is over. You scored ${score} out of ${bestOf}!`);
}

*/