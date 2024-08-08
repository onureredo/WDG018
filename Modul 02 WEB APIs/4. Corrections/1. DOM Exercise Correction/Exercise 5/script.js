// Select elements from DOM
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const playButton = document.getElementById('play-button');
const selectionButtons = document.querySelectorAll('#selection button');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Variables for score and choices
let userScore = 0;
let computerScore = 0;
let userChoice = '';
const choices = ['rock', 'paper', 'scissors'];

// Event-Listener für die Auswahl-Buttons
selectionButtons.forEach((el) =>
  el.addEventListener('click', (e) => selectChoice(e.target.id))
);

// Event-Listener für den Play-Button
playButton.addEventListener('click', playRound);

// Funktion zur Auswahl des Benutzers
function selectChoice(choice) {
  userChoice = choice;
  // Aktualisiert die Darstellung der Auswahl-Buttons
  selectionButtons.forEach((el) => {
    if (el.id === choice) {
      el.classList.add('border-4', 'border-yellow-500');
    } else {
      el.classList.remove('border-4', 'border-yellow-500');
    }
  });
}

// Funktion zum Spielen einer Runde & Warnung, wenn keine Auswahl getroffen wurde
function playRound() {
  if (!userChoice) {
    alert('Please select Rock, Paper, or Scissors!');
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Zufällige Auswahl für den Computer
  const result = determineWinner(userChoice, computerChoice); // Bestimmt den Gewinner

  resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result.message}`; // Anzeige des Ergebnisses

  // Aktualisiert Punktzahl des Users & Computers
  if (result.winner === 'user') {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (result.winner === 'computer') {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }

  userChoice = ''; // Setzt die Userauswahl zurück
  selectionButtons.forEach((el) =>
    el.classList.remove('border-4', 'border-yellow-500')
  ); // Entfernt die Markierung von allen Buttons
}

function determineWinner(user, computer) {
  if (user === computer) {
    return { winner: 'none', message: "It's a tie!" };
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return { winner: 'user', message: 'You win!' };
  } else {
    return { winner: 'computer', message: 'Computer wins!' };
  }
}
