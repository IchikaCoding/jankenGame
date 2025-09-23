function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const optionIndex = Math.floor(Math.random() * options.length);
  return options[optionIndex];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else return false;
}
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
