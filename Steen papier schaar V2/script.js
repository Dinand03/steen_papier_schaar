// Span elements
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

// Scoreboard elements
const rondesOutput = document.querySelector("#rondes");
const scorePlayerOutput = document.querySelector("#scorePlayer");
const scoreCPUOutput = document.querySelector("#scoreCPU");
const scoreDrawOutput = document.querySelector("#scoreDraw");

// Images (alle keuzes)
const buttons = document.querySelectorAll(".choice-img");

// Geluidseffecten
const soundWin = document.querySelector("#soundWin");
const soundLose = document.querySelector("#soundLose");
const soundDraw = document.querySelector("#soundDraw");

// Variabelen
let humanChoice = "";
let computerChoice = "";

let rondes = 0;
let scorePlayer = 0;
let scoreCPU = 0;
let scoreDraw = 0;

// Starttekst
humanOutput.innerHTML = "Maak je keuze!";
computerOutput.innerHTML = "Nog geen keuze";

/* ------------------------------
   Functie: genereert computer keuze
--------------------------------*/
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "steen";
    case 2:
      return "papier";
    case 3:
      return "schaar";
  }
}

/* ------------------------------
   Functie: winnaar bepalen + scoreboard + animaties + geluid
--------------------------------*/
function bepaalWinnaar() {
  rondes++;
  rondesOutput.innerHTML = rondes;

  // Reset animatie classes
  resultOutput.classList.remove("flash-win", "flash-lose", "shake");

  // Gelijkspel
  if (humanChoice === computerChoice) {
    scoreDraw++;
    scoreDrawOutput.innerHTML = scoreDraw;
    resultOutput.innerHTML = "Gelijkspel!";
    resultOutput.classList.add("shake");
    soundDraw.play();
    return;
  }

  const spelerWint =
    (humanChoice === "steen" && computerChoice === "schaar") ||
    (humanChoice === "papier" && computerChoice === "steen") ||
    (humanChoice === "schaar" && computerChoice === "papier");

  if (spelerWint) {
    scorePlayer++;
    scorePlayerOutput.innerHTML = scorePlayer;
    resultOutput.innerHTML = "Je hebt gewonnen!";
    resultOutput.classList.add("flash-win");
    soundWin.play();
  } else {
    scoreCPU++;
    scoreCPUOutput.innerHTML = scoreCPU;
    resultOutput.innerHTML = "De computer heeft gewonnen!";
    resultOutput.classList.add("flash-lose");
    soundLose.play();
  }
}

/* ------------------------------
   Een event handler voor ALLE images
--------------------------------*/
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {

    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;

    computerChoice = generateComputerChoice();
    computerOutput.innerHTML = computerChoice;

    bepaalWinnaar();
  });
});
