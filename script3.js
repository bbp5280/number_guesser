var randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);
var guessInput = document.getElementById ('enteredguess');
var guessSubmit = document.getElementById('guessbutton');
// var clearButton = document.querySelector('.clear-botton');
var clearButton = document.getElementById('clear-botton');

// clearButton.disabled = true;


  if (guessInput.value === ""){
    clearButton.disabled = true;
clearButton.style.backgroundColor ='#d0d2d3'
  }
  else{
    clearButton.disabled = false;
    clearButton.style.backgroundColor ='#929497'
  }


guessSubmit.addEventListener ('click', function (event) {
  event.preventDefault()

  var guessVal = guessInput.value;


  var lastGuess = document.getElementById ('last-guess');
  var lastGuessText = document.getElementById ('your-text');
  var highLowText = document.getElementById ('high-low');

  if(parseInt(guessVal) > randomNumber){
    lastGuessText.innerHTML = 'Your last guess was';
    lastGuess.innerHTML = guessVal;
    highLowText.innerHTML = 'That was too high.';
    }

    else if (parseInt(guessVal) === randomNumber)
    {
        lastGuessText.innerHTML = '';
        lastGuess.innerHTML = 'BOOM';
        highLowText.innerHTML = '';
    }
    else  {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessVal;
      highLowText.innerHTML = 'That was too low.';
}})


var refreshPage = document.getElementById('reset')

refreshPage.addEventListener ('click', function (event) {
  event.preventDefault()
  window.location.reload(true)})

// var clearInput = document.getElementById('clear-button')

// clearInput.addEventListener ('click', function (event) {
    // event.preventDefault()
