// Step 1: Initialize an array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Step 2: Use the forEach method to print each number
numbers.forEach((number) => {
  console.log(number);
});

// Step 3: Use the forEach method to calculate the sum of the numbers
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log('Sum:', sum); // Prints: Sum: 15

// Step 4: Use the forEach method to create a new array with squared values
const squaredNumbers = [];
numbers.forEach((number) => {
  squaredNumbers.push(number * number);
});
console.log('Squared Numbers:', squaredNumbers); // Prints: Squared Numbers: [1, 4, 9, 16, 25]

// MAP

// Step 1: Initialize an array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Step 2: Use the map method to create a new array with doubled values
const doubledNumbers = numbers.map((number) => number * 2);
console.log('Doubled Numbers:', doubledNumbers); // Prints: Doubled Numbers: [2, 4, 6, 8, 10]

// Step 3: Use the map method to create a new array of strings
const stringNumbers = numbers.map((number) => `Number: ${number}`);
console.log('String Numbers:', stringNumbers); // Prints: String Numbers: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// Step 4: Use the map method to create a new array of objects
const numberObjects = numbers.map((number) => ({
  original: number,
  squared: number * number,
}));
console.log('Number Objects:', numberObjects);

// FIND

// Step 1: Initialize an array of numbers
// const numbers = [10, 20, 30, 40, 50];

// Step 2: Use the find method to locate a number greater than 25
const numberGreaterThan25 = numbers.find((number) => number > 25);
console.log('First number greater than 25:', numberGreaterThan25); // Prints: First number greater than 25: 30

// Step 3: Initialize an array of objects
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// Step 4: Use the find method to locate a person named "Charlie"
const personNamedCharlie = people.find((person) => person.name === 'Charlie');
console.log('Person named Charlie:', personNamedCharlie);

// FILTER

// Step 1: Initialize an array of numbers
// const numbers = [5, 10, 15, 20, 25, 30];

// Step 2: Use the filter method to create a new array with numbers greater than 15
const numbersGreaterThan15 = numbers.filter((number) => number > 15);
console.log('Numbers greater than 15:', numbersGreaterThan15);
// Prints: Numbers greater than 15: [20, 25, 30]

// Step 3: Initialize an array of objects
// const students = [
//   { name: 'Alice', grade: 85 },
//   { name: 'Bob', grade: 92 },
//   { name: 'Charlie', grade: 78 },
//   { name: 'David', grade: 88 },
//   { name: 'Eve', grade: 95 },
// ];

// Step 4: Use the filter method to create a new array with students who scored above 80
const studentsAbove80 = students.filter((student) => student.grade > 80);
console.log('Students who scored above 80:', studentsAbove80);

// SOME & EVERY
// Step 1: Initialize an array of numbers
const numbers = [4, 8, 15, 16, 23, 42];

// Step 2: Use the some method to check for numbers greater than 20
const hasNumberGreaterThan20 = numbers.some((number) => number > 20);
console.log('Are there any numbers greater than 20?', hasNumberGreaterThan20);
// Prints: Are there any numbers greater than 20? true

// Step 3: Use the every method to check for numbers less than 50
const allNumbersLessThan50 = numbers.every((number) => number < 50);
console.log('Are all numbers less than 50?', allNumbersLessThan50);
// Prints: Are all numbers less than 50? true

// Step 4: Initialize an array of objects
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// Step 5: Use the some method to check if any student failed
const hasAnyStudentFailed = students.some(
  (student) => student.passed === false
);
console.log('Did any student fail?', hasAnyStudentFailed);
// Prints: Did any student fail? true

// Step 6: Use the every method to check if all students are older than 18
const allStudentsOlderThan18 = students.every((student) => student.age > 18);
console.log('Are all students older than 18?', allStudentsOlderThan18);
