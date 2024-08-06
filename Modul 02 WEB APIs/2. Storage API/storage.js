// LOCAL STORAGE
// Daten speichern => KEY VALUE
localStorage.setItem('key', 'value');
localStorage.setItem('username', 'JohnDoe');

// Daten abrufen
let username = localStorage.getItem('username');
// console.log(username); // Ausgabe: JohnDoe

// Daten löschen
localStorage.removeItem('username');

// Alle Daten löschen
localStorage.clear();

// SESSION STORAGE
// Daten speichern => KEY VALUE
sessionStorage.setItem('sessionID', '123456');

// Daten abrufen
let sessionID = sessionStorage.getItem('sessionID');
// console.log(sessionID); // Ausgabe: 123456

// Daten löschen
sessionStorage.removeItem('sessionID');

// Alle Daten löschen
sessionStorage.clear();

//JSON, JSON.STRINGIFY & JSON.PARSE
// OBJECT IN JS
const person = {
  name: 'Alice',
  age: 25,
  city: 'Berlin',
};

// JSON FORMAT
// {
//     "name":"Alice",
//     "age":25,
//     "city":"Berlin"
// }

const personJSON = JSON.stringify(person);
// console.log(personJSON);

const personOBJ = JSON.parse(personJSON);
// console.log(personOBJ);

localStorage.setItem('person', person);
localStorage.setItem('person', personJSON);
