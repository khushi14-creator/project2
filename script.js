let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("resultMessage").textContent = "";
    document.getElementById("attemptsDisplay").textContent = "Attempts: 0";
    document.getElementById("playAgainBtn").style.display = "none";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    attempts += 1;
    document.getElementById("attemptsDisplay").textContent = "Attempts: " + attempts;

    if (!userGuess) {
        document.getElementById("resultMessage").textContent = "Please enter a number!";
        return;
    }

    if (userGuess < randomNumber) {
        document.getElementById("resultMessage").textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        document.getElementById("resultMessage").textContent = "Too high! Try again.";
    } else {
        document.getElementById("resultMessage").textContent = 
            "🎉 Congratulations! You guessed it!";
        document.getElementById("playAgainBtn").style.display = "inline-block";
    }
}

document.getElementById("submitBtn").addEventListener("click", checkGuess);
document.getElementById("playAgainBtn").addEventListener("click", startGame);

startGame(); // start automatically when page loads
