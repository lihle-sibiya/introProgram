// let message = "Hello world!";
// console.log("Hello World");

/* let name = "Nick";
 console.log("Hello " + name);
if (name.length > 7) 
{
console.log("Wow you ahve a REALLY long name!");
}
else 
{
  console.log("Your name isn't very long")
}
*/

/* let lemonChicken = false;
 let beefWithBlackBean = true;
 let sweetAndSourPork = true;
 
if (lemonChicken) 
{
console.log("Great! I'm having lemon chicken!");
}
else if (beefWithBlackBean)
{
  console.log("I'm having the beef.");
}
else if (sweetAndSourPork)
{
console.log("OK, I'll have the pork.");
}
else 
{
console.log("Well, I guess I'll have rice then.");
}
*/


let nameLihle = true;
let nameKhanyi = false;
let nameSabelo = false;

if ("Lihle") {
    console.log("Hello me");
}
else if ("nameKhanyi") {
    console.log("Hello sister Khanyi");
}
else if ("nameSabelo") {
    console.log("Hello nephew Sabelo");
}
else {
    console.log("Hello stranger");
}


/*let theName = prompt("What is your name?").toLocaleLowerCase();

if (theName === "Lihle") {
    alert("Hello me");
}
else if (theName === "Elizabeth") {
    alert("Hello mom");
}
else if (theName === "Fangelakhe") {
    alert("Hello dad");
}
else {
    alert("Hello stranger");
} */

//...LOOPS
//WHILE LOOP
/*let sheepCounted = 0;
while(sheepCounted < 10) {
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
}
console.log("Zzzzzzzzzzz");*/

// FOR LOOP

/*let timesToSayHello = 3;
for (var i = 0; 1< timesToSayHello; i++){
    alert("Hello");
}*/

//Change the sheep While loop to a for loop

/*for ( let sheepCounted= 0;  sheepCounted< 10; sheepCounted++){
    console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzz");*/

//FOR Loops with Arrays

/*let animals = ["Dog", "Cat", "Horse", "Mouse"];
for (let i=0; i < animals.length; i++){
    console.log("This zoo contains a " + animals[i] + ".");
    }*/

/* let myName = "Lihle";
   for ( var i =0; i <myName.length; i++){
       console.log("My name contains the " + myName[i] + ".");
   }*/

/*let newName = "Nick";
for (var i=0; i< newName.length; i++){
    console.log("My name contains the letter " + newName[i] + ".");
}*/
/*for (let x= 2; x < 10000; x =x * 2){
    console.log(x);
}*/

//Try it out
//FOR LOOP
/*for (let x =3; x < 10000; x= x* 3){
    console.log(x);
}*/

//WHILE LOOP
/*let x =3;
while (x < 10000){
    console.log(x);
    x = x * 3;
}*/

//Challenge 1: Awesome Animals

/*let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
console.log(animals)
for (let i = 0; i < animals.length; i++){
 
    (animals[i] = "Awesome " + animals[i]);
    
}
console.log(animals)
*/


/*let randomString = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
for (i= 0; i <6 ; i++){
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
randomString += randomLetter;
}
console.log(randomString);*/

//Challenge 4


/*let input = "javascript is awesome";
let output = "";

for (i = 0; i < input.length; i++) {

    if (input[i] === "a") {
        output += "4";
    }
   else if (input[i] === "e") {
        output += "3";
    }
   else if (input[i] === "a") {
        output += "1";
    }
   else if (input[i] === "o") {
        output += "0";
    }
    else  {
        output += input[i];
    }
}*/


/*let theName = prompt("What's your name?");
alert ("Your name is " + theName);
/*

/*let likesCats = confirm("Do you like cats?");
if(likesCats){
alert( "You likecats.");
}
    else{
        alert("You don't like cats.");
    }*/
