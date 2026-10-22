let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    gameResult.textContent = "";
    gameResult.style.backgroundColor = "";

    setTimeout(function() {

        if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "rgba(239, 237, 255, 0.78);";
        }
        else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "rgba(239, 237, 255, 0.78);";
        }
        else if (guessedNumber === randomNumber) {
        gameResult.textContent = " ✨ Congratulations! You got it right ✨";
        gameResult.style.backgroundColor = "rgba(239, 237, 255, 0.78);";
        }
    },5);
}