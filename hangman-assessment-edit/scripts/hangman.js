// declare and initialize arrays
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "RUBY", "HTML", "CSS", "PHP", "C#", "C++"];
let usedNumbers = [];
let choice = Math.floor(Math.random() * game.length);
let answer = game[choice];
let myLength = answer.length;
let display = Array(myLength).fill("_");
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let hangmanImages = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png",
    "images/05.png",
    "images/06.png",
    "images/07.png"
];

// game setup works fine --steffen
function setup() {
    if (answer === "C#") {
        alert(answer);
    }

    for (let i = 0; i < answer.length; i++) {
        output += "_ ";
    }
    document.getElementById("word").innerHTML = output;
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    userLetter = document.getElementById("guess").value.toUpperCase();

    if (userLetter.match(/[A-Z]/)) { 
        output = '';
        if (!usedNumbers.includes(userLetter)) {
            usedNumbers.push(userLetter);
            document.getElementById("guessed").innerHTML = "Used letters: " + usedNumbers.join(", ");
        }

        let found = false;
        for (let c = 0; c < answer.length; c++) {
            if (userLetter == letters[c]) {
                display[c] = userLetter;
                win--;
                found = true;
            }
            output += display[c] + ' ';
        }

        if (!found) {
            attemptsLeft--;
            document.getElementById("hangman").src = hangmanImages[6 - attemptsLeft]; // Update hangman image
        }

        document.getElementById("word").innerHTML = output;
        output = '';

        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }
    }
});
