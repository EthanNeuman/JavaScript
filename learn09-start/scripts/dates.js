/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
var now =  new Date(); 
document.getElementById("basic").innerHTML = "The current date and time is: " + now;
/* Get Day of Week (getDay()) - returns number from 0(Sunday ) to 6(Saturday).*/

document.getElementById("today").innerHTML="Today is a "+["monday",];

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
var today = new Date();
var year = today.getFullYear(); 
var month = today.getMonth()+1; 
var day = today.getDate(); 
if (month < 10){
    document.write("<p>Today is January "+day+"th, "+year+" </p>");
    } else if (month == 12) {
        document.write("<p>Todays date is December "+day+"rd, "+year +"</p>")
}
else{
    var monthname = ["January","February","March","April"," May","June","July","August","September","October","November","December" ];
}
document.getElementById( 'today' ).innerHTML = "January "+day+"th, "+year ;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
var birthdayString ="April 20 2002"; 

var birthday = new Date(birthdayString);
document.getElementById('birthday').innerHTML = "Your Birthday is :"+ birthday;



// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
isoString = birthday.toISOString();
document.getElementById('iso').innerHTML = "This is Your ISO String: "+ isoString;



//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
// use the following format: yyyy-mm-dd hh :mm:ss
var date1 = "October 9, 1975 14:30 :00"; 
var date2 = "October 10, 2000 14:30:00 GMT-0800"; 
var date3 = "October 12, 2020 14:30:00 UTC"; 

newDate1= new Date(date1);
newDate2= new Date(date2);
newDate3= new Date(date3);

document.getElementById("date1").innerHTML="The first date is:" + newDate1;
document.getElementById("date2").innerHTML="The second date is:" + newDate2;
document.getElementById("date3").innerHTML="The third date is:"+ newDate3;





//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
// Use the following format: day, month, year, hours, minutes, seconds, milliseconds
function getTime(){
    var time = new Date();
    document.getElementById("get1").innerHTML = "Current Time is: "  + time ;
    }
    setInterval(getTime, 1000)
    function getDay() {
        var day = new Date().getDay();
        switch (day) {
            case 0:
                document.getElementById("get2").innerHTML ="Today is Sunday.";
                break;
                case 1:
                    document.getElementById("get2").innerHTML ="Today is Monday.";
                    break;
                    case 6:
                        document.getElementById("get2").innerHTML ="Today is Saturday.";
                        break;
                        default:
                            document.getElementById("get2").innerHTML ="Today is Weekday.";
                            }

    }                       





// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2024, 1, 14);

if (someday > today) {
    text = "today is before February 14.";
} else { 
    text = "Today is after February 14.";
}
document.getElementById("set3").innerHTML = text;