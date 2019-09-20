// King Math Web App Game
// Version 1.1

// Setup The Game
// Create a new game using newGame() function
newGame();

// Check the answer everytime they click an answer using checkAnswer(answer), newGame(), addEventListener() function
answers[0].addEventListener("click", function() {
	checkAnswer(this);
	newGame();
});
answers[1].addEventListener("click", function() {
	checkAnswer(this);
	newGame();
});

// Make user can play again after has no lives using newGame(), displayOrHideGameDiv(), resetScoreAndLives(), addEventListener() function
playAgainBtn.addEventListener("click", function() {
	newGame();
	resetScoreLivesAndElements();
	displayOrHideGameDiv();
});

// Declare Animation Variable
var fade;

// Hide Body
document.getElementById("body").style.opacity = 0;

// Set Scrollbar to top
window.onbeforeunload = function () {
  	window.scrollTo(0, 0);
}

// Display Version
var d = new Date();
versionFooter.innerHTML = "<strong>Version "+ versionCode +"</strong><br>© " + d.getFullYear() + " KingKingGreat";

// Display the score & lives using updateScoreAndLives() function
updateScoreAndLives();

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);