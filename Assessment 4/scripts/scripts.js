var secretNumber = Math.floor(Math.random() * 1000) + 1;

function guess() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 1000) {
        alert("Please enter a valid number between 1 and 1000.");
        return;
    }


    var diff = Math.abs(guess - secretNumber);
    var feedback = document.getElementById("feedback");


    if (diff === 0) {
        feedback.innerText = "Congratulations! You've guessed the correct number.";
    } else if (diff <= 10) {
        feedback.innerText = "Hot";
    } else if (diff <= 50) {
        feedback.innerText = "Warm";
    } else if (diff <= 100) {
        feedback.innerText = "Cold";
    } else {
        feedback.innerText = "Very Cold";
    }
}