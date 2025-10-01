/*
  Guessing Number Game
  - User enters a max number.
  - Program generates a random number between 1 and max.
  - User tries to guess the number until correct.
  - Program gives hints: "Too high" or "Too low".
  - User can type "quit" to stop playing.
  - User has a maximum number of attempts (default = 5).
*/

let max = parseInt(prompt("Enter the maximum number:"));

if (!isNaN(max) && max > 0) {
  let randomNum = Math.floor(Math.random() * max) + 1;
  let guess = prompt(`Guess a number between 1 and ${max} (or type 'quit' to exit):`);
  let attempts = 1;
  const maxAttempts = 5; // Can be changed later

  while (guess.toLowerCase() !== "quit" && attempts <= maxAttempts) {
    let userGuess = parseInt(guess);

    if (userGuess === randomNum) {
      console.log(`Correct! The number was ${randomNum}. You guessed it in ${attempts} attempts.`);
      break;
    } else if (userGuess > randomNum) {
      guess = prompt(`Too high! Attempts left: ${maxAttempts - attempts}. Try again:`);
    } else if (userGuess < randomNum) {
      guess = prompt(`Too low! Attempts left: ${maxAttempts - attempts}. Try again:`);
    } else {
      guess = prompt(`Invalid input! Please enter a number or 'quit'. Attempts left: ${maxAttempts - attempts}`);
    }
    attempts++;

    if (attempts > maxAttempts) {
      console.log(`Out of attempts! The correct number was ${randomNum}.`);
    }
  }

  console.log("Thanks for playing!");
} else {
  console.log("Invalid maximum number. Please refresh and try again.");
}
