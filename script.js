const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const startBtn = document.getElementById("start-btn");
const balloonContainer = document.getElementById("balloon-container");
const scoreboard = document.getElementById("scoreboard");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const finalScoreDisplay = document.getElementById("final-score");
const modal = document.getElementById("how-to-modal");
const minimizeBtn = document.getElementById("minimize-btn");
const closeBtn = document.getElementById("close-instructions");

let gameInterval, timeInterval;
let timeLeft = 30;
let score = 0;
let gameRunning = false;

// --- High Score Logic ---
function loadHighScores() {
  const scoresList = document.getElementById("scores-list");
  const highScores = JSON.parse(localStorage.getItem("balloonHighScores")) || [];
  scoresList.innerHTML = "";
  
  // Show top 3
  highScores.slice(0, 3).forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score}`;
    scoresList.appendChild(li);
  });
}

function saveScore(name, finalScore) {
  let highScores = JSON.parse(localStorage.getItem("balloonHighScores")) || [];
  highScores.push({ name: name || "Player", score: finalScore });
  highScores.sort((a, b) => b.score - a.score); // Best at the top
  localStorage.setItem("balloonHighScores", JSON.stringify(highScores.slice(0, 10)));
  loadHighScores();
}

// --- Modal Logic ---
minimizeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modal.classList.toggle("minimized");
  minimizeBtn.textContent = modal.classList.contains("minimized") ? "+" : "—";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// --- Game Logic ---
function createBalloon() {
  if (!gameRunning) return;
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.textContent = "🎈";
  balloon.style.left = Math.random() * (window.innerWidth - 80) + "px";
  
  const duration = Math.random() * 3 + 4;
  balloon.style.animationDuration = duration + "s";

  balloon.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    balloon.remove();
    score++;
    scoreDisplay.textContent = score;
  });

  balloon.addEventListener("animationend", () => balloon.remove());
  balloonContainer.appendChild(balloon);
}

function startGame() {
  const name = document.getElementById("player-name").value;
  if(!name) { alert("Please enter your name!"); return; }

  modal.style.display = "none";
  startScreen.style.display = "none";
  scoreboard.style.display = "block";
  
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  balloonContainer.innerHTML = "";
  gameRunning = true;

  gameInterval = setInterval(createBalloon, 500);
  timeInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function endGame() {
  gameRunning = false;
  clearInterval(gameInterval);
  clearInterval(timeInterval);
  
  const name = document.getElementById("player-name").value;
  saveScore(name, score);

  scoreboard.style.display = "none";
  endScreen.style.display = "flex";
  finalScoreDisplay.textContent = score;
}

startBtn.addEventListener("click", startGame);
loadHighScores(); // Load scores on page load