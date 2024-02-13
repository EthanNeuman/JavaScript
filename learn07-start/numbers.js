function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Ethan Neuman"

        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let  numToString = 123456;
    numToString.toString();
    (123456).toString();
    (123400 + 56).toString();
    document.getElementById("to-string").innerHTML = "Number 123456";

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    var numToExp =  1234567890.12
    numToExp.toExponential(2);
    numToExp.toExponential(4);
    document.getElementById("exponent").innerHTML = `The exponential  ${numToExp};` 


    // Demonstrate the use of toFixed() and print to the fixed paragraph
    var numToFixed = 123456.789;
    numToFixed.toFixed(2);
    numToFixed.toFixed(4);
    document.getElementById("fixed").innerHTML = `The fixed number ${numToFixed};`
    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let numToPrecision = 1234.56;
    numToPrecision.toPrecision(2);
    numToPrecision.toPrecision(4);
    numToPrecision.toPrecision(6);
    document.getElementById("precision").innerHTML += `${numToPrecision}`;

    // Demonstrate the use of parseFloat() and print to the float paragraph
    parseFloat("20");
    parseFloat("20.67");
    parseFloat("20 40 60");
    document.getElementById("float").innerHTML=  "parseFloat returned "+parseFloat("20 40 60");

    // Demonstrate the use of parseInt() and print to the int paragraph
    parseInt("100");
    parseInt("100.45");
    parseInt("100");
    parseInt("100 200 300")
    document.getElementById("int").innerHTML="parseInt returned "+parseInt("100 200 300");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    var one = 1, two = 2
    1 == 1;
    1 <= 1;
    1 <  1;
    
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    



    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

}