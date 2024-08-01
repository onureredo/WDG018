const robot = {
  name: 'Robo',
  model: 'RX-X1',
  year: 2024,
  greet: function () {
    console.log(
      `Hello, I am ${this.name}, model ${this.model} built in ${this.year}`
    );
  },
  performTask: function (task) {
    console.log(`${this.name} is performing task: ${task}`);
  },
};

robot.greet();
robot.performTask('cleaning');

const robo = document.getElementById('robot'); // Das Roboter Element aus HTML mit der ID 'robot' holen
let topPosition = 50; // Initialisiere die vertikale Position
let leftPosition = 50; // Initialisiere die horizontale Position

// Ein Event Listener ist eine Funktion, die in JavaScript auf ein bestimmtes Ereignis wie Mausklicks, Tastendrücke oder das Laden einer Seite wartet und darauf reagiert.

// Funktion, um Tastendruckereignisse zu verarbeiten und den Roboter entsprechend zu bewegen
function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowLeft':
      leftPosition -= 1;
      robot.performTask('moving left');
      break;
    case 'ArrowUp':
      topPosition -= 1;
      robot.performTask('going forward');
      break;
    case 'ArrowRight':
      leftPosition += 1;
      robot.performTask('moving right');
      break;
    case 'ArrowDown':
      topPosition += 1;
      robot.performTask('moving back');
      break;
    case ' ':
      topPosition -= 25;
      robot.performTask('jumping');
      break;
    case 's':
    case 'S':
      robot.performTask('stopped');
      break;
    default:
      console.log('Key not mapped to a task: ' + event.key);
  }
  robo.style.top = topPosition + '%'; // Aktualisierz die vertikale Position des Roboter-Elements
  robo.style.left = leftPosition + '%'; // Aktualisiert die horizontale Position des Roboter-Elements
}

// Event Listener für Tastendruckereignisse, um die handleKeyPress-Funktion aufzurufen
document.addEventListener('keydown', handleKeyPress);
