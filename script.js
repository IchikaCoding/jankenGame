let playerScore = 0;
let computerScore = 0;

/** コンピュータの手をランダムで生成するための関数 */
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const optionIndex = Math.floor(Math.random() * options.length);
  return options[optionIndex];
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
    playerScore = 1;
    const playerWinMessage = `Player wins! ${userOption} beats ${computerResult}`;
    return playerWinMessage;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore = 1;
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

/**
 * PlayerとComputerのスコアと結果のメッセージを更新する処理
 * @param {string} userOption
 */
function showResults(userOption) {
  let resultMsg = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = resultMsg;
}

showResults("Rock");
