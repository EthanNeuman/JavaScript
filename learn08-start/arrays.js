function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    document.getElementById("name").innerHTML = "Ethan Neumman";
    // Create an array called months that holds all the months of the year
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let May = "May";
    // use the index to print the month May from the months array the may paragraph
    document.getElementById("may").innerHTML = May;

    // print the length of the month array to the length paragraph
    document.getElementById("length").innerHTML = "These are the months" + months;

    // Loop through all of the months array and print each month to the months paragraph
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let  monthsParagraph = "<ul>";
    for (let i=0; i < months.length; i++) {
        monthsParagraph += `<li>${months[i]}</li> `;
        }
        monthsParagraph += "</ul>" ;
        document.getElementById("months").innerHTML = monthsParagraph;
    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
        document.getElementById("string").innerHTML = "The months as one long string is:"+ months

    // create two new arrays - weekends and weekdays, add the appropriate days to each
        let weekends = ["Saturday", "Sunday"];
        let weekdays = ["Monday","Tuesday","Wednesday","Thursday", "friday"];
        document.getElementById("weekend").innerHTML = "Weekends include: "+ weekends.join;


    // join the two arrays into a new array - week
    let week = weekdays.concat(weekends);
    document.getElementById("week").innerHTML ="Here's the list of Weekdays and Weekends"  + week ;


    // print the contents of week to the week paragraph


    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    document.getElementById("pop").innerHTML="After popping, here's the updated list  of Weekdays and Weekends"+ week.pop();


    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    fruits.push("Orange");
    fruits.push("Grapefruit");
    document.getElementById( "fruits" ).innerHTML="Fruits include: "+ fruits;


    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
        fruits.shift("Banana")
        document.getElementById("fruits2").innerHTML="Adding Banana at the beginning of Fruits"+" "+fruits;

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
        // reverse the array languages and print to the paragraph reversed
        languages.sort();
        document.getElementById("sorted").innerHTML= "Sorted Languages are :"+ languages;
    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9]
        numbers.sort((a, b) =>  a - b);
        document.getElementById("num-sorted").innerHTML= "Numbers Sorted in Ascending Order"  +numbers;

    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}