// Connects Elements
var a = document.getElementById("a");
var b = document.getElementById("b");

// Declare Gobal Variable
var answers = [a, b];
var correctPlace = Math.floor(Math.random() * answers.length);

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

// Declare onButtonClick Function
function createQuestion(e) {
	var question = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

	document.getElementById("questionText").textContent = question[0] + " + " + question[1];

	var num = Math.floor(Math.random() * 100);
	var index = 0;

	answers[correctPlace].textContent = question[0] + question[1];

	console.log("Old Val : " + correctPlace);

	if (e !== null) {
		if (parseInt(e.textContent) === (question[0] + question[1])) {
			document.getElementById("rText").textContent = "Correct";
		} else {
			document.getElementById("rText").textContent = "Incorrect";
		}
	}

	correctPlace = Math.floor(Math.random() * answers.length);
	console.log("New Val : " + correctPlace);
}

// Declare Animation Variable
var fade;

// Add Event Listener on Button
a.addEventListener("click", function() {
	createQuestion(a);
});

b.addEventListener("click", function() {
	createQuestion(b);
});

createQuestion(null);

// On Start Up

// Hide Body
document.getElementById("body").style.opacity = 0;

// Set Scrollbar to top
window.onbeforeunload = function () {
  	window.scrollTo(0, 0);
}

// Display Version
var d = new Date();
document.getElementById("version").innerHTML = "<strong>Version 2.1.2019519.193801.LM</strong><br>© " + d.getFullYear() + " KingKingGreat";

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);
