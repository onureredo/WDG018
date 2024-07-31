let fruits = ['apple', 'banana', 'cherry'];
// console.log(typeof fruits)
// console.log(fruits);
// console.log(fruits[1]);

const wdg17 = ['Student1', 'Student2', 'Student3', 'Student4'];
const wdg18 = ['Student5', 'Student6', 'Student7', 'Student8'];

// SOME ARRAY METHODS, more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// CONCAT verbindet zwei oder mehrere Arrays
// const allStudents = wdg17.concat(wdg18);

// JOIN verbindet alle Elemente eines Arrays zu einem einzigen String.
// join akzeptiert ein optionales Trennzeichen als Parameter.
// Wenn kein Trennzeichen angegeben wird, verwendet join standardmäßig ein Komma.

// let fruitStringDefault = fruits.join();
// console.log(fruitStringDefault);

// Verbinde alle Elemente des Arrays mit einem Komma und einem Leerzeichen
// let fruitString = fruits.join(', ');
// console.log(fruitString);

// REVERSE Methode kehrt die Reihenfolge der Elemente in einem Array um.
// Diese Methode verändert das ursprüngliche Array.
// fruits.reverse();
// console.log(fruits)

// SPLICE
// Fügt 'NewStudent' an die erste Position (Index 0) hinzu
// wdg17.splice(0, 0, 'NewStudent');

// Entferne das Element an der ersten Position (Student1)
// wdg17.splice(0, 1);

// Entferne zwei Elemente ab der ersten Position (Student1 & Student2)
// wdg17.splice(0, 2);

// Entferne das Element an der vierten Position (Index 3)
// wdg17.splice(3, 1);

// const firstTwoStudents = wdg18.slice(0, 2);
// console.log(wdg18);
// console.log(firstTwoStudents);

// SLICE erstellt eine Teilkopie eines Arrays und gibt diese als neues Array zurück, ohne das ursprüngliche Array zu verändern.
// kann zwei Parameter akzeptieren:
// 1. Startindex: Der Index, an dem das Ausschneiden beginnt.
// 2. Endindex (optional): Der Index, an dem das Ausschneiden endet (nicht einschließlich dieses Index).
// Wenn kein Endindex angegeben wird, schneidet slice bis zum Ende des Arrays.

// Erstellt ein neues Array, das die ersten beiden Elemente von wdg18 enthält
// const firstTwoStudents = wdg18.slice(0, 2);
// console.log(wdg18); // Ausgabe: Originales Array bleibt unverändert
// console.log(firstTwoStudents);

// Erstelle ein neues Array, das die Elemente von Index 1 bis zum Ende enthält
// const fromSecondStudent = wdg18.slice(1);
// console.log(fromSecondStudent);

// Erstelle ein neues Array, das die Elemente von Index 1 bis 3 (nicht einschließlich Index 3) enthält
// const middleStudents = wdg18.slice(1, 3);
// console.log(middleStudents);

const students = ['Student1', 'Student2', 'Student3', 'Student4'];

// for (let i = 0; i < students.length; i++) {
//   console.log('was called');
// }

// forEach führt eine bereitgestellte Funktion einmal für jedes Element im Array aus.
// students.forEach(function () {
//   console.log('callback was called');
// });

// students.forEach(function (el) {
//   console.log(el);
// });

// students.forEach(function (student, i, arr) {
//   console.log(`${student} is here, index is: ${i} and exist in array:${arr}`);
// });

// ES6
// students.forEach((student) => console.log(`${student} is here`));

// CALLBACK ist eine Funktion, die als Argument an eine andere Funktion übergeben und dort ausgeführt wird.
function greet(name) {
  console.log('Hello, ' + name);
}

function userGreet(callback) {
  const name = prompt('Please enter your name');
  callback(name);
}

userGreet(greet);

//HOF / HIGHER ORDER ARRAY METHODS

//MAP erstellt ein neues Array, indem es eine bereitgestellte Funktion auf jedes Element anwendet.
// const numbers = [5, 10, 15, 20];
// console.log(numbers);

// const double = numbers.map((num) => num * 2);
// console.log(double);

//FILTER erstellt ein neues Array mit allen Elementen, die den Test der bereitgestellten Funktion bestehen.
const age = [16, 21, 18, 34, 15, 28];
const adults = age.filter((i) => i >= 18);
// console.log(adults);

// FIND gibt den Wert des ersten Elements im Array zurück, das den Test der bereitgestellten Funktion besteht.
const numbers = [3, 7, 11, 8, 15, 2];
const firstTwoDigit = numbers.find((i) => i > 10);
// console.log(firstTwoDigit);

// SOME überprüft, ob mindestens ein Element im Array den Test der bereitgestellten Funktion besteht.
const largeNumber = numbers.some((i) => i > 10);
// console.log(largeNumber);

// EVERY überprüft, ob alle Elemente im Array den Test der bereitgestellten Funktion bestehen.
const allNumbers = numbers.every((i) => i < 20);
// console.log(allNumbers);
