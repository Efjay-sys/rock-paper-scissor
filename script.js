let choices = ["rock", "paper", "scissor"];
 


 getComputerChoice = function() 
{
  let choices = ["rock", "paper", "scissor"];

  let randomNumber = Math.floor(Math.random() * 3)
return choices[randomNumber];
};
let computerSelection = getComputerChoice();
console.log(computerSelection);

function getHumanChoice() {choices};
let humanSelection = getHumanChoice();

humanSelection = window.prompt("Enter Selection");
console.log(humanSelection);
//###################//
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;
//###################//

function playRound(humanSelection, computerSelection) {

if (humanSelection === computerSelection) { 
   return `It's a Tie! No Points`;
  } else if (
 (humanSelection === 'rock' && computerSelection === 'scissor') ||
 (humanSelection === 'scissor' && computerSelection === 'paper') ||
 (humanSelection === 'paper' && computerSelection === 'rock') 
  ) {
    return `you win!, ${humanSelection} beats ${computerSelection} Player gets ${humanScore++} point!`;
  } else {
    return `you lose!, ${computerSelection} beats ${humanSelection} Computer gets ${computerScore++} point!`; 
  }
}

playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection, computerSelection));
    
/*#############*/
  
function playGame()
{
  for (let i = 0; i < 5; i++) 
  {
  
  };
};

console.log(playGame());        

/*#############*/
