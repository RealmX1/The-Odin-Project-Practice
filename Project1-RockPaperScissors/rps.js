var playerScore   = 0;
var computerScore = 0;
var gameEnded     = false;

playerScoreDisplay = document.querySelector('#player-score');
computerScoreDisplay = document.querySelector('#computer-score');
gameResultDisplay = document.querySelector('#game-result');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

playerChoiceButtons = document.querySelectorAll('button.choice');
playerChoiceButtons.forEach(button => {
  button.addEventListener('click', function() {
    console.log(this.id);
    playRound(this.id);
  });
});
resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', function() {
  gameEnded = false;
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  gameResultDisplay.textContent = '';
});


winningScore = 5;

function playRound(playerChoice) {
    if (gameEnded) {
        console.log('Game has ended. Please reset to play again.');
        return;
    }
    const computerChoice = getComputerChoice();
    console.log(`Player: ${playerChoice} vs Computer: ${computerChoice}`);
    
    if (playerChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('Player wins!');
        playerScore++;
    } else {
        console.log('Computer wins!');
        computerScore++;
    }
    
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    checkEndGame();
}

function checkEndGame() {
    if (playerScore === winningScore) {
        console.log('Player wins the game!');
        gameResultDisplay.textContent = 'Player wins the game!';
    } else if (computerScore === winningScore) {
        console.log('Computer wins the game!');
        gameResultDisplay.textContent = 'Computer wins the game!';
    } else {
        return;
    }

    gameEnded = true;
}