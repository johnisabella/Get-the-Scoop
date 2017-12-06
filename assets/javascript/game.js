window.onload = function(){

// Array of words that users will guess throughout the game.
var wordBank = ["newspaper","anchor","byline","journalist","broadcast","press","editor","producer","source","headline","breaking","column","reporter","booking","interview","coverage","network","field","microphone","subscription"];

//Create variables to record the number of player guesses and wins.
var guesses = 0;
var wins = 0;

// Select a random word from the array. Print it to the console and send it to HTML.
var getRandomWord = function () {
    return wordBank [Math.floor(Math.random() * wordBank.length)];
};

var word = getRandomWord();
console.log(word);

// Determine the number of characters in the randomly selected word from the array.
function charCount (x) {
  var char = word.length;
  console.log (char);
}

//Call the charCount function
charCount(word);

//Convert the number of characters in the word to a series of underscores to display on the screen.
function underscore (x) {
  var targetDiv = document.getElementById("game-word");
  var char = word.length;
  var display = Array(char).fill('_').join("");
  targetDiv.innerHTML = display;
}
//Call the underscore function (innerHTML should be part of calling the function)
underscore(word);

//Display the number of characters to guess on the game screen.
function wordlength (x) {
  var anotherTargetDiv = document.getElementById("game-letters");
  var char = word.length;
  anotherTargetDiv.innerHTML = char;
}
//Call the underscore function (innerHTML should be part of calling the function)
wordlength(word);

//define variables again before game begins
var char = word.length;
var display = Array(char).fill('_').join("");
var chartest = display.length;
// var playOn = display.search("_");
// console.log('number of letters remaining to be guessed: ', playOn);
console.log('currently displayed: ', display);
console.log('current display is x characters: ', chartest);

//Determine if the character that the Player enters is part of the selected string from the gameWords array.
document.onkeyup = function(event) {
  var playerGuess = event.key;
  console.log ('Player guessed: ', playerGuess);
  var x = word.includes(playerGuess);
  console.log ('Guess is in the game word.', x);

//Determine which indicies in the game word contain the PlayerGuess
var indices = [];
for(var i=0; i<word.length;i++) {
    if (word[i] === playerGuess) indices.push(i);}
console.log ('index/indicies to be replaced with this guess: ', indices);

// Define a replaceAt function
String.prototype.replaceAt=function(index, replacement) {
      console.log(index, replacement);
      return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
  }

//This code replaces underscores in the display with correct guesses by comparing the user guess to the selected word. The code splits the string, inserts the player guess and substracts a character, then joins them back together.
if (x === true) {
  for (var i=0; i<indices.length;i++) {
  display = display.substr(0, indices[i]) + playerGuess + display.substr(indices[i] + playerGuess.length);
  var targetDiv = document.getElementById("game-word");
  targetDiv.innerHTML = display;
    console.log (indices[i])
  }
//If the guess is incorrect, 1 is added to the guess counter.
} else {
  guesses++;
}

//This code displays the last incorrect guess on the screen.
var displayedGuesses = []
displayedGuesses.push(playerGuess);
var targetGuessList = document.getElementById("guess-list");
targetGuessList.innerHTML = displayedGuesses
console.log (displayedGuesses);

//This code displays the total number of incorrect guesses on the screen.
var targetGuessListCounter = document.getElementById("guess-counter");
targetGuessListCounter.innerHTML = guesses;
console.log (guesses);

//This code prompts the "You Win" message to appear, once all of the letters in the word are guessed correctly.
if (display.includes("_")) {;} else {
  var gameWin = document.getElementById("you-win");
  gameWin.innerHTML = "YOU WIN!";
}

//This code prompts the "You Lose" message to appear once a player makes 6 incorrect guesses.
if (guesses === 6) {
  var gameLose = document.getElementById("you-win");
  gameLose.innerHTML = "The scoop is gone. You lose!";
}

//This code allows the user to refresh the game using the enter button.
document.addEventListener('keyup', function(e){
  if(e.keyCode == 13)
    window.location.reload();
})

//This closes out the window.onload function, which ensures that JS runs after the HTML loads in the browser.
}};
