"use strict";

//generate random number
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 5;
document.querySelector(".current-score").textContent = score;

let highScore = 0;
document.querySelector(".high-score").textContent = highScore;

//add event listener on check btn
document
  .getElementById("checkBtn")
  .addEventListener("click", checkGuessedNumber);

//on click function for check btn
function checkGuessedNumber() {
  let msgToBeUpdated;
  let guessedNumber = Number.parseInt(
    document.getElementById("guessedNumber").value
  );

  //No number entered
  if (!guessedNumber) {
    msgToBeUpdated = `⛔ No Number`;
  } else if (randomNumber === guessedNumber) {
    msgToBeUpdated = ` 🤩 Right Answer! Great Work!`;

    //show number if user guessed correctly
    let randomNumberField = document.getElementById("myNumber");
    randomNumberField.innerHTML = randomNumber;
    document.body.style.transitionDuration = "2s";
    document.body.style.backgroundColor = "#60b347";

    setTimeout(() => {
      alert(
        `\n👍 Good Game!\n\n🤩 Loved your gameplay! \n\nLoading the game again!`
      );
      reloadPage();
    }, 4000);
  } else {
    //Wrong guess
    let difference = guessedNumber - randomNumber;
    if (-3 < difference && difference < 3) {
      msgToBeUpdated = `You are quite close!`;
    } else if (difference > 2) {
      msgToBeUpdated = `Too High`;
    } else {
      msgToBeUpdated = `Too Low`;
    }

    score--;
    if (!score) {
      alert(`\n🥲 Game Over!\n\n 🤞 Hard Luck! Try Again!`);
      reloadPage();
    }
  }
  document.querySelector("#msg").textContent = msgToBeUpdated;
  document.querySelector(".current-score").textContent = score;
}

//add event listener on again btn
document.getElementById("playAgainBtn").addEventListener("click", reloadPage);

//on click function for again btn
function reloadPage() {
  location.reload();
}
