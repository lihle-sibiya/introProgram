let numberOfGuesses = 5;
let minGuess = 1;
let maxGuess = 10;
let secret = Math.floor(Math.random() * (maxGuess  - minGuess +1)) + minGuess;

let userName = prompt("What is your name?");
alert("Welcome to Guessing Game " + userName);

//Starting the game
while (numberOfGuesses > 0) {
    //Player input
    let guess = parseInt(prompt("Please guess the secret number (1-10)"));
    numberOfGuesses--;
    
    //Checking if the guess is correct
    if (guess === secret) {
        alert("Correct " + userName + "!" + " You did a great job !!!")
        break;
    }
    else if (guess < secret) {
        alert("Incorrect, too low. You have " + numberOfGuesses +  " guesses remaining!" );
    }

    else if (guess > secret) {
        alert("Incorrect, too high. You have " + numberOfGuesses +  " guesses remaining!");
    }
    //Ending the game
       if (numberOfGuesses === 0) {
        alert("You have ran out of guesses " + userName + "!" + " The answer is " + secret);
    }
    

} 

