let playerScore = 0;
let computerScore = 0;

/** コンピュータの手をランダムで生成するための関数 */
function getRandomComputerResult() {
  return "Scissors";
  // const options = ["Rock", "Paper", "Scissors"];
  // const optionIndex = Math.floor(Math.random() * options.length);
  // return options[optionIndex];
}
console.log(getRandomComputerResult());

/** Playerのじゃんけんの真偽を判定する処理 */
function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else return false;
}
// console.log(hasPlayerWonTheRound("Rock", "Scissors"));
// console.log(hasPlayerWonTheRound("Scissors", "Rock"));

/** 勝敗の結果のメッセージを取得するための関数 */
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    const playerWinMessage = `Player wins! ${userOption} beats ${computerResult}`;
    return playerWinMessage;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    const computerWinMessage = `Computer wins! ${computerResult} beats ${userOption}`;
    return computerWinMessage;
  }
}

// console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

// TODO どうしてletじゃないの？
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
/**
 * PlayerとComputerのスコアと結果のメッセージを更新する処理
 * @param {string} userOption
 */
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "player" : "computer"
    } has won the game.`;
  }

  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

// TODO　君の名は。
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});
paperBtn.addEventListener("click", function () {
  showResults("Paper");
});
scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
