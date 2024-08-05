// Holt den Input, den add-Button und die To-Do-Liste
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Holt alle Elemente mit der Klasse 'items'
const byClassName = document.getElementsByClassName('items'); // HTML Collection
console.log(byClassName);

// Holt das erste <li> Element innerhalb des Elements mit der ID 'listItem'
const querySelector = document.querySelector('#listItem li'); // gibt das erste Element zurück ==> <li>Hey</li>
console.log(querySelector);

// Holt alle <li> Elemente innerhalb des Elements mit der ID 'listItem'
const items = document.querySelectorAll('#listItem li'); // NodeList
console.log(items);
items.forEach((item) => console.log(item.textContent));

// Konvertiert NodeList zu einem Array
const itemsArray = Array.from(items);
itemsArray.map((item) => console.log(item.textContent));

// Funktion zum Hinzufügen einer neuen Aufgabe zur To-Do-Liste
function addTodo(task) {
  // Erstellt ein neues Listenelement (li)
  const li = document.createElement('li');

  // Setzt den Textinhalt des Listenelements auf die übergebene Aufgabe
  li.textContent = task;

  // Erstellt einen neuen Button zum Löschen der Aufgabe
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Fügt den Delete-Button zum Listenelement hinzu
  li.appendChild(deleteBtn);

  // Fügt das Listenelement zur To-Do-Liste hinzu, um es im DOM anzuzeigen
  todoList.appendChild(li);
}

// Event Listener für den 'Add' Button, um eine neue Aufgabe hinzuzufügen
addTodoBtn.addEventListener('click', () => {
  // Holt den Wert aus dem Input und entfernt überflüssige Leerzeichen mit trim Methode
  const task = todoInput.value.trim();

  // Prüft, ob der Wert nicht leer ist
  if (task) {
    addTodo(task); // Fügt die Aufgabe zur To-Do-Liste hinzu
    todoInput.value = ''; // Leert das Input
    todoInput.focus(); // Setzt den Fokus zurück auf das Input
  } else {
    alert('You cannot submit an empty task'); // Warnung bei leerer Eingabe
  }
});

// Event Listener für die To-Do-Liste zum Löschen von Aufgaben
todoList.addEventListener('click', (e) => {
  // Überprüft, ob das Ziel des Klicks ein BUTTON-Element ist => tagName gibt in Großbuchstaben zurück
  if (e.target.tagName === 'BUTTON') {
    // Entfernt das Elternelement (li) des geklickten Buttons aus dem DOM
    e.target.parentElement.remove();
  }
});

// CREATE H1

// Funktion zum Erstellen eines h1-Elements
function createH1Element() {
  // Erstellt ein neues h1-Element
  const h1 = document.createElement('h1');

  // Setzt den Textinhalt des h1-Elements
  h1.textContent = 'Hello World!';

  // Setzt die Farbe des h1-Elements auf Blau
  h1.style.color = 'blue';

  // Fügt das h1-Element zum body-Element hinzu
  document.body.appendChild(h1);
}

// Holt den Button
const createH1Btn = document.getElementById('create-h1-btn');

// Fügt einen Event Listener zum Button hinzu, um auf Click-Ereignisse zu reagieren => wenn gelickt, createH1Element Funktion wird ausgeführt.
createH1Btn.addEventListener('click', createH1Element);
