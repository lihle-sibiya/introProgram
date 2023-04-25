let words = ["mill", "eat", "great", "food"];
let word = words[Math.floor(Math.random() * words.length)];
//Preparing empty answer array with underscores
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
//Remaing letters
let remainingLetters = word.length;
let numberOfGuesses = 6;

//Starting the game while loop
while (remainingLetters > 0 && numberOfGuesses > 0) {
    alert(answerArray.join(" "));

    //Player's input
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    numberOfGuesses--;
    if (guess === null) {
        break;

    } else if (guess.length !== 1) {
        alert("Guess a single letter.");
    }
    else {
        //Check if the guess is correct
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
                else {
                    alert("You have already guessed this letter")}
                }
            }
        }

    }
    //Ending the game
    if (remainingLetters === 0) {
        alert(answerArray.join(" "));
    }
    else if (numberOfGuesses === 0) {
        alert("You have ran out of guesses. The answer is " + word);
    }
    else {
        alert("Nicely tried! The answer was " + word);
    }

