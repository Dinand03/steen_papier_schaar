// Span elements
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

// Buttons
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

// Variabelen voor keuzes
let humanChoice = "";
let computerChoice = "";

// Starttekst
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";
computerOutput.innerHTML = "Nog geen keuze";
resultOutput.innerHTML = "Nog geen resultaat";

function handleHumanClick(event) {
  // 1. Keuze van de speler opslaan
  humanChoice = event.target.id; // 'steen', 'papier' of 'schaar'
  humanOutput.innerHTML = humanChoice;

  // 2. Keuze van de computer bepalen
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "steen";
  } else if (randomNumber === 2) {
    computerChoice = "papier";
  } else if (randomNumber === 3) {
    computerChoice = "schaar";
  }
  computerOutput.innerHTML = computerChoice;

  // 3. Winnaar bepalen
  bepaalWinnaar();
}

// Event listeners
steenBtn.addEventListener("click", handleHumanClick);
papierBtn.addEventListener("click", handleHumanClick);
schaarBtn.addEventListener("click", handleHumanClick);

function bepaalWinnaar() {
  // Gelijkspel
  if (humanChoice === computerChoice) {
    resultOutput.innerHTML = "Gelijkspel!";
    return;
  }

  // Speler wint
  if (
    (humanChoice === "steen" && computerChoice === "schaar") ||
    (humanChoice === "papier" && computerChoice === "steen") ||
    (humanChoice === "schaar" && computerChoice === "papier")
  ) {
    resultOutput.innerHTML = "Je hebt gewonnen!";
  } else {
    // Anders wint de computer
    resultOutput.innerHTML = "De computer heeft gewonnen!";
  }
}
