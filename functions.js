// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Declare functions for the game

// getCorrectPlace() function for getting the answer index
function getCorrectPlace() {
	var randNum = Math.floor(Math.random() * 2);

	if (randNum === 1) return [1,0];
	return [0,1];
}

// createDisplayQuestion() function for creating & displaying the question
function createDisplayQuestion() {
	question = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
	questionText.textContent = question[0] + " + " + question[1];
}

// createDisplayAnswers() function for creating & displaying the answers
function createDisplayAnswers() {
	var correctPlace = getCorrectPlace();
	answers[correctPlace[0]].innerHTML = question[0] + question[1];
	answers[correctPlace[1]].innerHTML = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
}

// updateScoreAndLives() function for updating the game score & lives element on user screen.
function updateScoreAndLives() {
	scoreSpan.innerHTML = score;
	livesSpan.innerHTML = lives;
	resultScoreSpan.innerHTML = score;
}

function resetScoreLivesAndElements() {
	score = 0;
    lives = 3;
    result.innerHTML = "";
    updateScoreAndLives();
}

// displayOrHideGameDiv() function for displaying game divs after & before the game starts
function displayOrHideGameDiv(c) {
	if (c) {
		gameOverDiv.style.display = "block";
		gameBodyDiv.style.display = "none";
	} else {
		gameOverDiv.style.display = "none";
		gameBodyDiv.style.display = "block";
	}
}

// isGameOver() function for checking if its game over or not (has no more lives)
function isGameOver() {
	if (lives <= 0) return true;
	return false;
}

// newGame() function for creating a new game
function newGame() {
	createDisplayQuestion();
	createDisplayAnswers();
}

// checkAnswer(answer) function for checking the answer
function checkAnswer(answer) {
	if (Number(answer.innerHTML) === question[0] + question[1]) {
		result.textContent = "Correct";
		score++;
		newGame();
		updateScoreAndLives();
	} else {
		result.textContent = "Incorrect";
		lives--;
		newGame();
		updateScoreAndLives();
	}
	if (isGameOver()) {
		displayOrHideGameDiv(true);
	}
}