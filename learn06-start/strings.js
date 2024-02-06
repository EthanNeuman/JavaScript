function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    let myName = "Ethan";
    document.getElementById("name").innerHTML = myName;

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    document.getElementById("length").innerHTML = myString;

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape = "It's Okay! \n \t to not be okay! ";
    document.getElementById("escape").innerHTML = escape;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Ethan William Neuman";
    document.getElementById("first").innerHTML = name .slice(0, 5);



    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let name1 = "Ethan William Neuman"
    document.getElementById("middle").innerHTML = name1 .slice(6, 12);

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let name2 = "Ethan William Neuman"
    document.getElementById("last").innerHTML = name2 .slice(13);

    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College"
    let newMajor = major.replace("Physical Therapy", "Computer Science");
    document.getElementById("major").innerHTML =  newMajor;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    document.getElementById("upper").innerHTML = myText .toUpperCase();

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    document.getElementById("trim").innerHTML =  trimText.trim();

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let month = "May is coming soon"
    let mayIndex = month.indexOf('May');
    document.getElementById("index").innerHTML = `The Index of May is ${mayIndex}`;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    const firstName = 'Ethan'
    const lastName = 'Neuman'
    console.log(`My full name is ${firstName} ${lastName}.`)

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    document.getElementById("greeting").innerHTML = `Hello, My name is ${firstName} ${lastName}!`;
}