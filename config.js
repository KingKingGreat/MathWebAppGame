// Config file, do not change.

// Declare Game Vars
var question;
var score = 0;
var lives = 3;

// Declare Vars For Elements
const questionText = document.getElementById("questionText");
const answers = document.getElementsByName('answer');
const result = document.getElementById("rText");
const gameOverDiv = document.getElementById("gameOver");
const gameBodyDiv = document.getElementById("gameBody");
const versionFooter = document.getElementById("version");
const playAgainBtn = document.getElementById("playAgainBtn");
const scoreSpan = document.getElementsByName("score")[0];
const livesSpan = document.getElementsByName("lives")[0];
const resultScoreSpan = document.getElementsByName("resultScore")[0];

// Version Code
const versionCode = "1.1.20190920.193601.LM";