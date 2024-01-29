// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Ethan";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name1 = "Ethan";
    //fix the errors
    var firstName = "Ethan",
        lastName = "Neuman";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Ethan",
        lastName = "Neuman";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Bandit";
    dog2 = "Duke";
    //dog2 = "Nessie";
    var dog3 = "Harlee";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Keeva"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breed").innerHTML = breed;
    
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 =" + addition;
    let subtraction = 56 - 19
    document.getElementById("subtraction").innerHTML = "56 - 19 =" + subtraction;
    let multiplication = 120 * 3
    document.getElementById("multiplication").innerHTML = "120 x 3 =" + multiplication;
    let division = 7 / 4
    document.getElementById("division").innerHTML = "7 / 4 =" + division;
    let modulus = 7 % 4
    document.getElementById("modulus").innerHTML = "7 % 4 =" + modulus;
    let increment = 10
    increment += 5;
    document.getElementById("increment").innerHTML = "Increment: 10 + 5 =" + increment;
    let decrement = 25
    decrement -= 8;
    document.getElementById("decrement").innerHTML = "Decrement: 25 - 8 =" + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1" + "x = " + x;
    y = 20
    document.getElementById("minus-equals").innerHTML = "y = 20\ny -== 5" + "y = " + y;
    x *= 10
    document.getElementById("times-equals").innerHTML = "x *= 10" + "x = " + x;
    x /= 5
    document.getElementById("divides-equals").innerHTML = "x /= 5" + "x = " + x;
    x %= 15
    document.getElementById("modulus-equals").innerHTML = "x %= 15" + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const games = [" Tarkov", "Valorant", "Palworld"];
    document.getElementById("array").innerHTML = games;
    const car = {type:"Honda", model:"Hatchback EX", color:"Pearl White"};
    document.getElementById("object").innerHTML = car;
    

}
