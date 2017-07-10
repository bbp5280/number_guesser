// Global Variables
var randomNumber =  Math.round(generateNumber(0, 101))
console.log(randomNumber);
var guessInput = document.getElementById('enteredguess');
var guessSubmit = document.getElementById('guessbutton');
var clearButton = document.getElementById('clear-botton');
var refreshPage = document.getElementById('reset')
var enterMinMax = document.getElementById('min-max')
var nextLevel = document.getElementById('next-level')
var minMaxBox = document.getElementById ('min-max-box');
var nextLevelButton = document.getElementById ('next-level-button');
var rangeIncreaseBox = document.getElementById ('range-increase-box');

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

//Initial Number Generator Function
function generateNumber(min, max) {
  return (Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min));
  console.log (generateNumber)}

  //Next Level Button Control
  nextLevelButton.addEventListener ('click', function (event) {
    event.preventDefault()

    minMaxBox.innerHTML = "<p class=\"range-instructions\" id=“range-explain”>Enter your own range:</p>" + " <label id=\"label-min\">"
    + "Minimum #" + "<input type=\"text\"  name=\"user-min\"   placeholder=\"Min\" class=\"min-user\" id=\"user-min\">" +
    "</label>" + "<label id=\"label-max\">" + "Maximum #" + "<input type=\"text\" name=\"user-max\"   placeholder=\"Max\" class=\"max-user\" id=\"user-max\">" +
    "</label>" + "<button type=\"button\" name=\"enter-max-min\" class=\"max-min\" id=\"min-max\">Enter</button>";

    nextLevelButton.innerHTML = '';})

  // User Entered Gusser Logic
  minMaxBox.addEventListener ('click', function(event){
  event.preventDefault()

  var maxInput = document.getElementById('user-max')
  var minInput = document.getElementById('user-min')
  var min = minInput.value;
  var max = maxInput.value;
  var randomNumber = Math.round(generateNumber(min, max))
  console.log(randomNumber)

  guessSubmit.addEventListener ('click', function (event) {
    event.preventDefault()

    var guessRange = guessInput.value;
    var lastGuess = document.getElementById ('last-guess');
    var lastGuessText = document.getElementById ('your-text');
    var highLowText = document.getElementById ('high-low');

      if  (min > parseInt(guessRange) || parseInt(guessRange) > max){
            alert ('Guesses must be a number between ' + min + ' and ' + max);}

      else if (parseInt(guessRange) > randomNumber){
      lastGuessText.innerHTML = 'Your last guess was';
      lastGuess.innerHTML = guessRange;
      highLowText.innerHTML = 'That was too high.';
      }
      else if (parseInt(guessRange) === randomNumber){
          lastGuessText.innerHTML = '';
          lastGuess.innerHTML = 'BOOM!';
          highLowText.innerHTML = '';
          rangeIncreaseBox.innerHTML = "<p class = \"instructions-increase\" id=\"increase-instructions\">Make the game a bit tougher. Decrease your minimum by 10 and increase your maximum by 10</p>" +
          " <button type=\"button\" name=\"increase-range\" class=\"max-min\" id=\"increase-range\">Expand your range</button>" +
          "<p class=\"or\" id=\"or-p\">Or</p>"}

      else if (parseInt(guessRange)< randomNumber) {
        lastGuessText.innerHTML = 'Your last guess was';
        lastGuess.innerHTML = guessRange;
        highLowText.innerHTML = 'That was too low.';}

      else {
        alert ('Guesses must be a number between ' + min + ' and ' + max);
      }})})
