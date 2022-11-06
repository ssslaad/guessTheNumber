"use strict";

//generate random number
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 5;
document.querySelector(".current-score").textContent = score;

let highScore;

console.log(`initial highscore: ` + localStorage.getItem("highScore"));
if (
  localStorage.getItem("highScore") === undefined ||
  localStorage.getItem("highScore") == null
) {
  localStorage.setItem("highScore", 0);
}

highScore = localStorage.getItem("highScore");
document.querySelector(".high-score").textContent = highScore;
console.log(`After field update: ` + localStorage.getItem("highScore"));

//add event listener for enter key
document
  .getElementById("guessedNumber")
  .addEventListener("keydown", function (key) {
    if (key.code === "Enter") {
      checkGuessedNumber();
    }
  });

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
  }
  // Right guess
  else if (randomNumber === guessedNumber) {
    msgToBeUpdated = ` 🤩 Right Answer! Great Work!`;

    if (score > localStorage.getItem("highScore")) {
      highScore = score;
    }
    localStorage.setItem("highScore", highScore);
    document.querySelector(".high-score").textContent = highScore;

    //show number if user guessed correctly
    showNumber();
    document.body.style.backgroundColor = "#60b347";

    setTimeout(() => {
      alert(
        `\n👍 Good Game!\n\n🤩 Loved your gameplay! \n\nLoading the game again!`
      );
      reloadPage();
    }, 4000);
  }
  // Incorrect guess
  else {
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
      showNumber();
      document.getElementById("checkBtn").disabled = true;
      msgToBeUpdated = `OOPS! No chances left!`;
      setTimeout(() => {
        alert(
          `\n🥲 Game Over!\n\nNumber was : ${randomNumber}\n\n 🤞 Hard Luck! Try Again!`
        );
        reloadPage();
      }, 2000);
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

function showNumber() {
  let randomNumberField = document.getElementById("myNumber");
  randomNumberField.innerHTML = randomNumber;
  document.body.style.transitionDuration = "2s";
}
