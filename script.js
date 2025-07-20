
 /*
  
  function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  function playRound(playerSelection, computerSelection) {
    // Your playRound logic here
    // Example:
    if (playerSelection === computerSelection) {
      tieScore++;
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      return "You win!";
    } else {
      computerScore++;
      return "You lose!";
    }
  }

  for (let i = 0; i < 5; i++) {
    // Get player and computer choices (replace with your actual implementation)
    const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
    const computerChoices = ["rock", "paper", "scissors"];
    const computerSelection =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(`Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tieScore}`);
  // Determine the winner based on final scores
}

playGame();

*/

//-----------------Code Above Copied from Google as reference----------------//
  
 let choices = ["rock", "paper", "scissor"];
 


 getComputerChoice = function() 
{
  let choices = ["rock", "paper", "scissor"];

  let randomNumber = Math.floor(Math.random() * 3)
return choices[randomNumber];
};
console.log(getComputerChoice())

function getHumanChoice() {choices};
let humanSelection = getHumanChoice();

humanSelection = window.prompt("Enter Selection");
//humanSelection = getHumanChoice.toLowerCase();


function playRound(humanSelection, computerSelection) {

if (humanSelection === computerSelection) { 
   return "It's a Tie!";
  } else if (
 (humanSelection === 'rock' && computerSelection === 'scissor') ||
 (humanSelection === 'scissor' && computerSelection === 'paper') ||
 (humanSelection === 'paper' && computerSelection === 'rock') 
  ) {
    return `you win!, ${humanSelection}! beats ${computerSelection}`;
  } else {
    return `you lose!, ${computerSelection}! beats ${humanSelection}.`; 
  }
}
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection));



    
/*#############*/

const humanScore = 0;
const computerScore = 0;
const tieScore = 0;

/*#############*/

function playGame()
{

} 

