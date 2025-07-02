
  /* function playGame() {
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

//-----------------Code Copied from Google as reference----------------//
  let rock = "rock";
  let paper = "paper";
  let scissor = "scissor";

function getComputerChoice(rock, paper, scissor) 
{
    
};
console.log(getComputerChoice)
