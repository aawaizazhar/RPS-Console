function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rps = ['rock', 'paper', 'scissors'];
  function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
  }
  function getHumanChoice() {
    return prompt('Enter your Choice:');
  }
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(`It is a tie! You both chose ${humanChoice}`);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
      computerScore++;
    }
    console.log(
      `Current Score: You - ${humanScore}, Computer - ${computerScore}`,
    );
  }
  for (let i = 0; i < 5; i++) {
    console.log(`\nRound ${i + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`\nGame Over!`);
  if (humanScore > computerScore) {
    console.log('You win the game!');
  } else if (humanScore === computerScore) {
    console.log('It is a tie!');
  } else {
    console.log('You lose the game!');
  }
  console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
}
playGame();
