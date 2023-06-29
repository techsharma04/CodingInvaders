// Array to store the sequence of commands
var sequence = [];
// Variable to keep track of the player's position in the sequence
var playerPosition = 0;
// Variable to store the current round
var round = 0;
// Variable to store whether the game is currently active or not
var gameActive = false;

// Function to generate a random command and add it to the sequence
function addToSequence() {
  var commands = ["red", "green", "blue", "yellow"];
  var randomCommand = commands[Math.floor(Math.random() * commands.length)];
  sequence.push(randomCommand);
  console.log(randomCommand);
}


// Function to play the sequence of commands
function playSequence() {
  // Disable player input during playback
  gameActive = false;
  
  var i = 0;
  var interval = setInterval(function() {
    // Display the command to the player
    displayCommand(sequence[i]);
    i++;
    // If the end of the sequence is reached, stop playback and enable player input
    if (i >= sequence.length) {
      clearInterval(interval);
      gameActive = true;
    }
  }, 1000);
}

// Function to display a command to the player
function displayCommand(command) {
  // Display the command to the player (you can implement this according to your UI)
  console.log("Simon says: " + command);
  // Wait for a short duration (you can implement a delay function or use a timeout)
  // Clear the display (you can implement this according to your UI)
  console.log("Clearing the display...");
}

// Function to handle player input
function handleInput(command) {
  // Check if the game is active and the player input matches the current command in the sequence
  if (gameActive && command === sequence[playerPosition]) {
    playerPosition++;
    // Check if the player has completed the entire sequence
    if (playerPosition === sequence.length) {
      // Start a new round
      playerPosition = 0;
      round++;
      console.log("Round " + round + " completed. Your turn!");
      addToSequence();
      setTimeout(playSequence, 1000);
    }
  } else {
    // Game over
    console.log("Game over!");
    console.log("You completed " + round + " rounds.");
    // Reset game variables
    sequence = [];
    playerPosition = 0;
    round = 0;
    gameActive = false;
  }
}

// Example usage:
// Call addToSequence to start the game
addToSequence();
// Call playSequence to play the initial sequence
playSequence();
// Simulate player input (you can replace this with your own input mechanism)
setTimeout(function() {
  handleInput("red");
}, 3000);
