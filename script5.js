// Global Variables
var randomNumber =  Math.round(generateNumber(0, 101))
console.log(randomNumber);
var guessInput = document.getElementById('enteredguess');
var guessSubmit = document.getElementById('guessbutton');
// var clearButton = document.querySelector('.clear-botton');
var clearButton = document.getElementById('clear-botton');
var refreshPage = document.getElementById('reset')
var enterMinMax = document.getElementById('min-max')
var maxInput = document.getElementById('user-max')
var minInput = document.getElementById('user-min')

//Button Control
refreshPage.addEventListener ('click', function (event) {
  event.preventDefault()
  window.location.reload(true)})

  clearButton.disabled = true;
  clearButton.style.backgroundColor ='#d0d2d3';
  refreshPage.disabled = true;
  refreshPage.style.backgroundColor ='#d0d2d3';
  // guessSubmit.disabled = true;
  // guessSubmit.style.backgroundColor ='#d0d2d3';

  guessInput.addEventListener ('keyup', function () {
      clearButton.disabled = false;
      clearButton.style.backgroundColor ='#929497';
      clearButton.addEventListener("mouseover", function( event ) {
      event.target.style.backgroundColor = "#eb008b";})
      clearButton.addEventListener("mouseout", function( event ) {
      event.target.style.backgroundColor = "#929497";})
      refreshPage.disabled = false;
      refreshPage.style.backgroundColor ='#929497';
      refreshPage.addEventListener("mouseover", function( event ) {
      event.target.style.backgroundColor = "#eb008b";})
      refreshPage.addEventListener("mouseout", function( event ) {
      event.target.style.backgroundColor = "#929497";})
    })


//initial Number Generator Function
function generateNumber(min, max) {
  return (Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min));
  console.log (generateNumber)
}


//Default Guesser Logic
guessSubmit.addEventListener ('click', function (event) {
  event.preventDefault()

  var guessVal = guessInput.value;
  var lastGuess = document.getElementById ('last-guess');
  var lastGuessText = document.getElementById ('your-text');
  var highLowText = document.getElementById ('high-low');


    if  (0 > parseInt(guessVal) || parseInt(guessVal) > 100){
          alert ('Guesses must be a number between 0 and 100');}

    else if (parseInt(guessVal) > randomNumber){
    lastGuessText.innerHTML = 'Your last guess was';
    lastGuess.innerHTML = guessVal;
    highLowText.innerHTML = 'That was too high.';
    }
    else if (parseInt(guessVal) === randomNumber)

    {
        lastGuessText.innerHTML = '';
        lastGuess.innerHTML = 'BOOM!';
        highLowText.innerHTML = '';
    }
    else if (parseInt(guessVal)< randomNumber) {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessVal;
      highLowText.innerHTML = 'That was too low.';}

    else {
      alert ('Guesses must be a number between 0 and 100');
    }})

// User Entered Gusser Logic
enterMinMax.addEventListener ('click', function(event){
event.preventDefault()

var min = minInput.value;
var max = maxInput.value;
var randomNumber = Math.round(generateNumber(minInput.value, maxInput.value))
console.log(randomNumber)

guessSubmit.addEventListener ('click', function (event) {
  event.preventDefault()

  var guessVal = guessInput.value;
  var lastGuess = document.getElementById ('last-guess');
  var lastGuessText = document.getElementById ('your-text');
  var highLowText = document.getElementById ('high-low');


    if  (min > parseInt(guessVal) || parseInt(guessVal) > max){
          alert ('Guesses must be a number between ' + min + ' and ' + max);}

    else if (parseInt(guessVal) > randomNumber){
    lastGuessText.innerHTML = 'Your last guess was';
    lastGuess.innerHTML = guessVal;
    highLowText.innerHTML = 'That was too high.';
    }
    else if (parseInt(guessVal) === randomNumber)

    {
        lastGuessText.innerHTML = '';
        lastGuess.innerHTML = 'BOOM!';
        highLowText.innerHTML = '';
    }
    else if (parseInt(guessVal)< randomNumber) {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessVal;
      highLowText.innerHTML = 'That was too low.';}

    else {
      alert ('Guesses must be a number between ' + min + ' and ' + max);
    }
})})
