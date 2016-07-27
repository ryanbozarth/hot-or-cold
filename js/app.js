
$(document).ready(function(){

	var randomNumber = undefined;
  var numberDistance = Math.abs(userGuess - randomNumber);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    /*--- New game  ---*/
  	$(".new").on("click", function(){
  		randomNumber = Math.floor((Math.random() * 100) + 1);
  		console.log(randomNumber);
  		// newGame();
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
  	    checkValue(userGuess);
      }
    }
      /*--- Check guess  ---*/

      function checkValue(userGuess){
      if (userGuess == randomNumber) {
      	$("#feedback").replaceWith("<h2>You won! Click new game to play again.</h2>");
      }
      else if (numberDistance < 10) {
        $("#feedback").replaceWith("<h2>hot</h2>");
      }
      else {
       $("#feedback").replaceWith("<h2>cold</h2>"); 
      }
    }


}); // end doc ready

/*

    function newGame(){
        $(".guessBox").empty(); // needs to empty user guesses in guess box
      	$("#userGuess").val(''); // needs to return to 0 after several guesses
      	$("#feedback").show(); // needs to show "make your guess!" after guesses
      }
 
  Math.abs(userGuess - random);

 */




