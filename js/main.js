"use strict";

//generate random number
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

//add event listener on check btn
document
  .getElementById("checkBtn")
  .addEventListener("click", checkGuessedNumber);

//on click function for check btn
function checkGuessedNumber() {
  let guessedNumber = Number.parseInt(
    document.getElementById("guessedNumber").value
  );

  let msgToBeUpdated;
  if (randomNumber === guessedNumber) {
    msgToBeUpdated = ` Right Answer! Great Work!`;

    //show number if user guessed correctly
    let randomNumberField = document.getElementById("myNumber");
    randomNumberField.innerHTML = randomNumber;
    document.body.style.backgroundColor = "#60b347";
  } else {
    msgToBeUpdated = `Hard Luck! Try Again!`;
  }
  document.querySelector("#msg").textContent = msgToBeUpdated;
  //document.getElementById("msg").innerText = msgToBeUpdated;
}

//add event listener on again btn
document.getElementById("playAgainBtn").addEventListener("click", reloadPage);

//on click function for again btn
function reloadPage() {
  location.reload();
}
