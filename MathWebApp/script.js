// Connect Button
var checkButton = document.getElementById("checkButton");

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
function onButtonClick() {
	var a = document.getElementById("a");
	var b = document.getElementById("b");

	var question = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
	var answers = [a, b];

	document.getElementById("questionText").textContent = question[0] + " + " + question[1];

	var num = Math.floor(Math.random() * 10);
	var correctPlace = Math.floor(Math.random() * answers.length);
	for (var i = 0; i < answers.length; i++) {
		if (i === correctPlace) {
			while (num !== (question[0] + question[1])) {
				num = Math.floor(Math.random() * 10);
			}

			answers[i].value = num;
		} else {
			while (num === (question[0] + question[1])) {
				num = Math.floor(Math.random() * 10);
			}

			answers[i].value = num;
		}
	}
}

// Declare Animation Variable
var fade;

// Add Event Listener on Button
checkButton.addEventListener("click", onButtonClick);

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
