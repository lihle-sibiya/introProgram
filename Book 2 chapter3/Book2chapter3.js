//CREATING VARIABLES - camelCase
//var myFirstName;
//var favoriteFood;
//var birthday;
//var timeOfDay;

//assigning value to variables
let book;
book = "JavaScript For Kids For Dummies";
console.log(book)
//Changing the values of the book
book = "The Call of the Wild";
console.log(book)
//string length . 20 | DATA TYPE STRING
console.log(book.length)
//length property in a string . 14
console.log("I am a string.".length)

//index of a string. Index 2
console.log("I am a string.".indexOf("am"));

//NUMBER DATA TYPE
//result 1010
console.log("10" + 10)
//100
console.log(10 * "10")

//DATA TYPE: BOOLEAN
//True
console.log(1 < 10)
//False
console.log(100 > 2000)
//All TRUE
console.log(2 === 2)
console.log(false === false)
console.log(40 === 40)

//Prompting the User for Input
prompt("What is your name?");

//Storing user input using alert
/*alert("Good job!")*/

/*let myNameIs = "Lihle";
alert(myNameIs);*/

let firstName = "Lihle";
let yourScore = 30;
alert("Hi, " + firstName + ". Your current score is: " +
    yourScore);

//Using document.write()
//a webpage is a document
document.write("Hi, Mom!");
document.write(333 + 100);

//<br> HTML tag to add space
document.write("How are you?<br>");
document.write("I'm great! Thanks!<br>");
document.write("That's awesome!<br><br>");

//Combining Input and Output
let toName = "Lihle";
let fromName = "The Grammy Awards";

let letterBody = "We are pleased to inform you that your song, 'Can\'t Stop Coding!,' has been voted the Best Song of All Time by the awarding committee.";

document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);

