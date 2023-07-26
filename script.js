// script.js
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "It's a tie";
  } else if (computerSelection === "rock" && playerSelection === "paper") { 
    return "You Win, Paper beats Rock";
  } else if (computerSelection === "rock" && playerSelection === "scissors") { 
    return "You Lose, Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") { 
    return "You Lose, Paper beats Rock";
  } else if (computerSelection === "paper" && playerSelection === "scissors") { 
    return "You Win, Scissors beats Paper";
  } else if (computerSelection === "scissors" && playerSelection === "paper") { 
    return "You Lose, Paper beats Scissors";
  } else if (computerSelection === "scissors" && playerSelection === "rock") { 
    return "You Win, Rock beats Scissors";
  }
}

function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function handleClick(playerChoice) {
  const playerSelection = playerChoice.toLowerCase();
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.includes("Win")) {
    playerScore++;
  } else if (roundResult.includes("Lose")) {
    computerScore++;
  }

  console.log(roundResult);
  console.log("You: ", playerScore, "    ", "Computer: ", computerScore);

  checkGameResult();
}

function checkGameResult() {
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const rockBtn = document.getElementById("rockBtn");
  const paperBtn = document.getElementById("paperBtn");
  const scissorsBtn = document.getElementById("scissorsBtn");

  rockBtn.addEventListener("click", () => handleClick("ROCK"));
  paperBtn.addEventListener("click", () => handleClick("PAPER"));
  scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
});

