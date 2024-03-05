/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
movies = ["The Witcher", "The Vikings", "The Shawshank Redemption", "Valhalla", "The Book Of Eli"]

movie_paragraph = ""
for (movie in movies){
    movie_paragraph += "- " + movie + "\n"
}

document.getElementById("list").innerHTML = " My Favorite movies are: " + movies;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
var songSet = new Set(["Dear Maria", "Bohemian Rhapsody", "Popular Monster", "Smells Like Teen Spirit", "Stairway to Heaven"]);


var set1Content = "Set 1 contents:<br>";
songSet.forEach(function(song) {
    set1Content += "- " + song + "<br>";
});
document.getElementById("set1").innerHTML = set1Content;


// add two more songs to the set then display in the set2 paragraph

songSet.add("Hotel California");
songSet.add("Wonderwall");


var set2Content = "Set 2 contents:<br>";
songSet.forEach(function(song) {
    set2Content += "- " + song + "<br>";
});
document.getElementById("set2").innerHTML = set2Content;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

var emailMap = new Map([
    ['Ethan', 'ethan@example.com'],
    ['Ben', 'ben@example.com'],
    ['Korey', 'korey@example.com'],
    ['Tyler', 'tyler@example.com'],
    ['Thomas', 'thomas@example.com']
]);

var map1Content = "Map 1 contents:<br>";
emailMap.forEach(function(email, name) {
    map1Content += name + ": " + email + "<br>";
});
document.getElementById("map1").innerHTML = map1Content;

// add two new names and emails and display in map2 use the forEach() method
emailMap.set('Frank', 'frank@example.com');
emailMap.set('Grace', 'grace@example.com');

var map2Content = "Map 2 contents:<br>";
emailMap.forEach(function(email, name) {
    map2Content += name + ": " + email + "<br>";
});
document.getElementById("map2").innerHTML = map2Content;


// get and display the email of one person, display in map3
var person = 'Ethan'; 
var email = emailMap.get(person);

document.getElementById("map3").innerHTML = "Email of " + person + ": " + email;