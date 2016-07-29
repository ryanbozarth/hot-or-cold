"use strict";

$(document).ready(function(){

	  var randomNumber;
    var guessCount; 
    newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
 function newGame(){
  randomNumber = Math.floor((Math.random() * 100) + 1);
      guessCount = 0;
      console.log(randomNumber);
  }


    /*--- New game  ---*/
  	$(".new").on("click", function(){
  		newGame();
      $(".guessBox").empty();
      $("#feedback").text("Make your Guess!");
      $("#count").text("0");

  	});
  	
    /*--- Capture guess  ---*/

  	 $("#guessButton").on("click", function(event){
    	event.preventDefault();
    	var userGuess = +($("#userGuess").val());
    	console.log(userGuess);
    	$("#userGuess").val('');
    	verifyValue(userGuess);
    });

   function verifyValue(value){
  

      if (isNaN(value)) {
  	    alert("Please enter a number");
      }
      else if (value < 1 || value > 100){
  	    alert("Please enter a number between 1 and 100")
      }
      else {
  	    checkValue(value);
        guessFeedback(value);
      }
    }
      /*--- Check guess  ---*/

      function checkValue(userGuess){
      

      var numberDistance = Math.abs(userGuess - randomNumber);

      if (userGuess == randomNumber) {
      	 $("#feedback").text("You won! Click new game to play again.");
      }
      else if (numberDistance < 10) {
         $("#feedback").text("hot");
         guessCount += 1;
         $("#count").text(guessCount);
      }
      else if (numberDistance > 10 && numberDistance < 20) {
         $("#feedback").text("kinda hot");
         guessCount += 1;
         $("#count").text(guessCount);
      }
      else {
        $("#feedback").text("cold"); 
        guessCount += 1;
        $("#count").text(guessCount);
      }
    }
    function guessFeedback(userGuess) {
      $(".game ul").append("<li>"+userGuess);
      }

}); // end doc ready

/*
If a person already guessed that number, create an alert that states that number has
already been guessed. Do not log it. Must be aware of all previous guesses for that game
but make sure that previous guesses from other games are not accounted.
*/


