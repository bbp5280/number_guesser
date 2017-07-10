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
var increaseRange = document.getElementById('increase-range')
var nextLevel = document.getElementById('next-level')

//Button Control
refreshPage.addEventListener ('click', function (event) {
  event.preventDefault()
  window.location.reload(true)})

  clearButton.disabled = true;
  clearButton.style.backgroundColor ='#d0d2d3';
  refreshPage.disabled = true;
  refreshPage.style.backgroundColor ='#d0d2d3';

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

//Hide Initial
nextLevel.style.visibility='hidden';
enterMinMax.style.visibility='hidden';
maxInput.style.visibility='hidden';
minInput.style.visibility='hidden';
increaseRange.style.visibility='hidden';
document.getElementById("range-explain").style.visibility = "hidden";
document.getElementById("label-min").style.visibility = "hidden";
document.getElementById("label-max").style.visibility = "hidden";
document.getElementById("increase-instructions").style.visibility = "hidden";
document.getElementById("or-p").style.visibility = "hidden";

//Initial Number Generator Function
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
      alert ('Guesses must be a number between 0 and 100');
    } else if (parseInt(guessVal) > randomNumber) {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessVal;
      highLowText.innerHTML = 'That was too high.';
    } else if (parseInt(guessVal) === randomNumber) {
      lastGuessText.innerHTML = '';
      lastGuess.innerHTML = 'BOOM!';
      highLowText.innerHTML = '';
      nextLevel.style.visibility='visible';
    } else if (parseInt(guessVal)< randomNumber) {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessVal;
      highLowText.innerHTML = 'That was too low.';
    } else {
      alert ('Guesses must be a number between 0 and 100');
    }})

//Next Level Button Control
nextLevel.addEventListener ('click', function (event) {
  event.preventDefault()
  enterMinMax.style.visibility='visible';
  maxInput.style.visibility='visible';
  minInput.style.visibility='visible';
  document.getElementById("range-explain").style.visibility = "visible";
  document.getElementById("label-min").style.visibility = "visible";
  document.getElementById("label-max").style.visibility = "visible";
  nextLevel.style.visibility='hidden';
})

// User Entered Gusser Logic
enterMinMax.addEventListener ('click', function(event){
event.preventDefault()

var min = minInput.value;
var max = maxInput.value;
var randomNumber = Math.round(generateNumber(min, max))
console.log(randomNumber)

function guessedNumIsTooBig(range) {
  lastGuessText.innerHTML = 'Your last guess was';
  lastGuess.innerHTML = range;
  highLowText.innerHTML = 'That was too high.';
}

guessSubmit.addEventListener ('click', function (event) {
  event.preventDefault()

  var guessRange = guessInput.value;
  var lastGuess = document.getElementById ('last-guess');
  var lastGuessText = document.getElementById ('your-text');
  var highLowText = document.getElementById ('high-low');


    if  (min > parseInt(guessRange) || parseInt(guessRange) > max){
          alert ('Guesses must be a number between ' + min + ' and ' + max);}

    else if (parseInt(guessRange) > randomNumber){

      guessedNumIsTooBig(guessRange)
    }
    else if (parseInt(guessRange) === randomNumber)

    {
        lastGuessText.innerHTML = '';
        lastGuess.innerHTML = 'BOOM!';
        highLowText.innerHTML = '';
        increaseRange.style.visibility='visible';
        document.getElementById("increase-instructions").style.visibility = "visible";
        document.getElementById("or-p").style.visibility = "visible";
    }
    else if (parseInt(guessRange)< randomNumber) {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessRange;
      highLowText.innerHTML = 'That was too low.';}

    else {
      alert ('Guesses must be a number between ' + min + ' and ' + max);
    }
})
})

// -10 +10 Increase Range
increaseRange.addEventListener ('click', function(event){
event.preventDefault()

var minIncrease = parseInt(minInput.value) - 10;
var maxIncrease = parseInt(maxInput.value) +10 ;
console.log(minIncrease)
console.log(maxIncrease)
var randomNumber = Math.round(generateNumber(minIncrease, maxIncrease))
console.log(randomNumber)

guessSubmit.addEventListener ('click', function (event) {
  event.preventDefault()

  var guessIncrease = guessInput.value;
  var lastGuess = document.getElementById ('last-guess');
  var lastGuessText = document.getElementById ('your-text');
  var highLowText = document.getElementById ('high-low');


    if  (minIncrease > parseInt(guessIncrease) || parseInt(guessIncrease) > maxIncrease){
          alert ('Guesses must be a number between ' + minIncrease + ' and ' + maxIncrease);}

    else if (parseInt(guessIncrease) > randomNumber){
    lastGuessText.innerHTML = 'Your last guess was';
    lastGuess.innerHTML = guessIncrease;
    highLowText.innerHTML = 'That was too high.';
    }
    else if (parseInt(guessIncrease) === randomNumber)

    {
        lastGuessText.innerHTML = '';
        lastGuess.innerHTML = 'BOOM!';
        highLowText.innerHTML = '';
    }
    else if (parseInt(guessIncrease)< randomNumber) {
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessIncrease;
      highLowText.innerHTML = 'That was too low.';}

    else {
      alert ('Guesses must be a number between ' + minIncrease + ' and ' + maxIncrease);
    }
})})
