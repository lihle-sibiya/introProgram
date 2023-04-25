/*let ourFirstFunction = function(){
    console.log("Hello World!")
}
ourFirstFunction();*/

/*let sayHelloTo = function (aName){
    alert("Hello " + aName);
}
sayHelloTo("Lihle");
sayHelloTo("Nick");
sayHelloTo("Sheryl");*/

/*function drawCats(howManyTimes) {
    for (i = 0; i < howManyTimes; i++) {
console.log(i+ " =^.^=");
    }
}
drawCats(5);
console.log("the end");*/

//TWO ARGUMENTS
/*function printMultipleTimes(howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + " "+ whatToDraw);
}
}
printMultipleTimes(10, "<0.0>");
printMultipleTimes(3,">_<" );*/

/*function double(number) {
    return number * 2;
}

/*console.log(double (3));
let answer = double (6) + double(8);
alert(answer);

console.log(double(double(3)));*/

/*function pickRandomWord (wordsArray){
   return word= wordsArray[Math.floor(Math.random() * wordsArray.length)];
return word;
}*/
/*let randomWords = ["Planet", "Worm", "Flower", "Computer"];

alert(pickRandomWord(randomWords));*/

/*function generateRandomInsults(){
let randomBodyParts = ["Head", "Arm", "Toe"];
let randomAdjectives = ["Pleasant", "Interesting", "Smart"];
let randomWords = ["Walk", "Moon", "Broom", "Angel", "Bird"];

// Join all the random strings into a sentence:
let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + 
pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
return(randomString);
}

function pickRandomWord (wordsArray){
    return word= wordsArray[Math.floor(Math.random() * wordsArray.length)];
 return word;
 }
 console.log(generateRandomInsults());
 console.log(generateRandomInsults());
 console.log(generateRandomInsults());
 console.log(generateRandomInsults());
 console.log(generateRandomInsults());*/


/*function fifthLetter(theName){
   if (theName.length < 5){
       return;
   }
   return "The fifth letter of your name is " + theName[4] + ".";
}

alert(fifthLetter("Nick"));*/

/* function medalForScore(score) {
    if(score <3 ){
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold";
 }

 let yourScore = prompt("What is your score");
 alert("You get " + medalForScore(yourScore))*/

//Multiplication function
/*function double(number) {
   return number * 2;
}

/*console.log(double (3));
let answer = double (6) + double(8);
alert(answer);

console.log(double(double(3)));*/

//TWO ARGUMENTS
/*function printMultipleTimes(howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + " "+ whatToDraw);
}
}
printMultipleTimes(10, "<0.0>");
printMultipleTimes(3,">_<" );*/

//Challenge 1 - Arithmetic with functions
/*function add(sum1, sum2){
return(sum1 + sum2) ;
}

function multiply(number1, number2){
   return (number1 * number2);

}
console.log(add(multiply(3625, 9824), 777));*/

//Challenge 2: Are trhe Arrays the same

/*function areArraysSame(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1.length !== array2.length) {
            return false;
        }
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true;
}
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));*/


//Challenge 3: Hangman Functions
let words = ["mill", "eat", "great", "food"];
let word = pickWord();
//Preparing empty answer array with underscores
let answerArray = [];
setupAnswerArray();

//Remaing letters
let remainingLetters = word.length;
let numberOfGuesses = 7;
let userName = prompt("What is your name?");
alert("Welcome to HANGMAN " + userName);

//Starting the game while loop
let guess = "";
while (remainingLetters > 0 && numberOfGuesses > 0) {
    showPlayerProgress();
    //Player's input
     guess = getGuess();
    numberOfGuesses--;
    if (guess === null) {
        break;
    } else if (guess.length != 1) {
        alert("Guess a single letter.");
    }
    else {
        //Start checking if the guess is correct
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
       
    }
}
showAnswerAndCongratulatePlayer();

        //CHALLENGE 3: FUNCTIONS
        function pickWord() {
            //Return a random word
            return words[Math.floor(Math.random() * words.length)];
            // Return a random word
        };

        function setupAnswerArray() {
            // Return the answer array
            for (let i = 0; i < word.length; i++) {
                answerArray[i] = "_";
            }
        };

        function showPlayerProgress() {
            // Use alert to show the player their progress
            alert(answerArray.join(" "));
        };

        function getGuess() {
            // Use prompt to get a guess
            return prompt("Guess a letter, or click Cancel to stop playing.");
        };

        function updateGameState(guess, word, answerArray) {
            // Update answerArray and return a number showing how many
            // times the guess appears in the word so remainingLetters
            // can be updated
            guess = guess.toLowerCase();
            let correctGuesses = 0;
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    if (answerArray[j] === "_") {
                        answerArray[j] = guess;
                        correctGuesses++;
                 } else {
                        alert("You have already guessed this letter!");
                        break;
                    }
                }
            }
   
    return correctGuesses;
};

function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (remainingLetters === 0) {
        alert(answerArray.join(" "));
        alert("CONGRATULATIONS " + userName + "!!!")
    }
    else if (numberOfGuesses === 0) {
        alert("You have ran out of guesses " + userName + "!" + " The answer is " + word);
    }
    else {
        alert("Game ended. Nicely tried " + userName + "!" + " The answer is " + word);
    }
};