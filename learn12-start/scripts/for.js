// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
document.addEventListener("DOMContentLoaded", function() {
    var beerParagraph = document.getElementById("beer");
    var beerLyrics = "";

    for (var i = 99; i > 0; i--) {
        var currentBottle = i;
        var nextBottle = i - 1;
        var currentBottleText = currentBottle === 1 ? "bottle" : "bottles";
        var nextBottleText = nextBottle === 1 ? "bottle" : "bottles";

        beerLyrics += currentBottle + " " + currentBottleText + " of beer on the wall, ";
        beerLyrics += currentBottle + " " + currentBottleText + " of beer.<br>";
        beerLyrics += "Take one down, pass it around, ";
        beerLyrics += nextBottle === 0 ? " no more bottles of beer on the wall.<br><br> " : nextBottle + " " + nextBottleText + " of beer on the wall.<br><br>";
    }

    beerParagraph.textContent = beerLyrics;
});



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let txt  = "";
  for (var x in months) {
    txt += months[x]; 
  }
  document.getElementById("for-in").innerHTML= txt;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

const games = ["Escape From Tarkov", "Call of Duty", "Warzone"];

let  gameTxt = "";
for (var x of games){
    gameTxt += games[x];
}
document.getElementById("for-of").innerHTML = games;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let text = ""
let i = 0;
do {
    text += "<br>The number is " + i;
    i++;
}
while(i <= 50);
document.getElementById("while").innerHTML = text;