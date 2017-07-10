var randomNumber = Math.floor(Math.random() * 101);
var guessInput = document.getElementById ('enteredguess')
var guessSubmit = document.getElementById('guessbutton')

guessSubmit.addEventListener ("click", function (event) {
  event.preventDefault()

  var guessVal = guessInput.value;


  var lastGuess = document.getElementById ('last-guess');
  var lastGuessText = document.getElementById ('your-text');
  var highLowText = document.getElementById ('high-low');

  lastGuessText.innerHTML = "Your last guess was"
  lastGuess.innerHTML = guessVal;
  highLowText.innerHTML = "That was to high."

})
