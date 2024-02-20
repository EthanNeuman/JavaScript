function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(14.9);
    document.getElementById("ceil").innerHTML = Math.ceil(14.9);
    document.getElementById("floor").innerHTML = Math.floor(14.9);
    document.getElementById("trunc").innerHTML = Math.trunc(14.9);
    document.getElementById("sign").innerHTML = Math.sign(-50);
    document.getElementById("pow").innerHTML = Math.pow(12, 4);
    document.getElementById("min").innerHTML = Math.min(0, 12, 100, 1414, 1413, -1);
    document.getElementById("random").innerHTML = Math.random();
    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor((Math.random() * 100));


    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    age = Number(age);
    if (isNaN(age)){
        drinkable = "Input is not a number";
    } else {
        drinkable = (age >= 21) ? "Drink responsibly" : "Not old enough to drink";
    }
    document.getElementById("comparisons").innerHTML = drinkable;



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}