// CONSOLE
// console.log('Hey');
// console.log(5 + 5);
// console.warn('WARNING');
// console.info('INFO');
// console.error('ERROR');

// JS Datatypes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// PRIMITIVES
// STRING
// let name = 'John Doe';
// console.log(name);
// console.log(typeof name);

// Number
let age = 30;
// console.log(age);
// console.log(typeof age);

// BigInt
let bigNumber = BigInt(12045564564564);
// console.log(bigNumber);
// console.log(typeof bigNumber);

// Boolean
let isStudent = true;
// console.log(isStudent);
// console.log(typeof isStudent);

// Undefined
let something;
// console.log(something)
// console.log(typeof something);

let emptyValue = null;
// console.log(emptyValue);
// console.log(typeof emptyValue);
// Output: Object => ist eine bekannte Besonderheit in JavaScript, da der ursprüngliche Wert von null als ein spezielles Objekt in den frühen Versionen von JavaScript implementiert wurde. Diese Entscheidung kann aus Gründen der Abwärtskompatibilität nicht geändert werden.

// NON-PRIMITIVES
// OBJECTS

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// console.log(typeof person);

// ARRAYS
let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.push('Watermelon');
// console.log(fruits);
// console.log(typeof fruits);

// VARIABLES
// VAR, LET & CONST
var x = 'something';
x = 'something else';
// console.log(x);

// var name = 'something';

// if (true) {
//   name = 'something else';
// }

// console.log(name);

// CONST
const y = 'something';
// y = 'something else';

// LET
let name = 'Onur';
name = 'not Onur';
// console.log(name);

// w Arrays
const students = ['Student1', 'Student2', 'Student3'];
students.push('Student4');
// console.log(students);

// COMPARISONS AND LOGICAL OPERATORS: https://www.w3schools.com/js/js_comparisons.asp
// Gleichheitsoperator (==) (equal to)
// console.log(5 == '5');

// Strikter Gleichheitsoperator (===) (equal value and equal type)
// console.log(5 === '5');

// Ungleichheitsoperator (!=) (not equal)
// console.log(5 != '5');

// Strikter Ungleichheitsoperator (!==)  NOT EQUAL VALUE AND TYPE
// console.log(5 !== 5);

// Größer als (>) (greater than)
// console.log(10 > 5);

// Größer oder gleich (>=) greater than or equal to
// console.log(10 >= 5);
// console.log(5 >= 5);
// console.log(4 >= 5);

// kleiner als (<) less than
// console.log(5 < 10);
// console.log(10 < 5);

// Kleiner oder gleich (<=) less than or equal to
// console.log(5 <= 10);
// console.log(5 <= 5);
// console.log(10 <= 5);

// LOGICAL AND => &&
// let a = 5;
// let b = 10;
// console.log(a > 0 && b > 0);
// console.log(a > 0 && b < 0);

// LOGICAL OR => ||
// let a = 5;
// let b = -10;
// console.log(a > 0 || b > 0);
// console.log(a < 0 || b > 0);

// LOGICAL NOT => !
// let a = true;
// let b = false;
// console.log(!a);
// console.log(!b);

// CONDITIONS
// IF ELSE
// const condition = true;

// if (condition) {
//   console.log('Condition is true');
// } else {
//   console.log('Condition is false');
// }

// const firstConditon = true;
// const secondCondition = false;

// if (firstConditon && secondCondition) {
//   console.log('Both conditions are true');
// } else if (firstConditon) {
//   console.log('only first is true');
// } else if (secondCondition) {
//   console.log('only second condition is true');
// } else {
//   console.log('Neither first nor second conditions are true');
// }

// TERNARY OPERATOR
// firstConditon
//   ? console.log('condition is true')
//   : console.log('condition is not true');

// SWITCH
// const pokemon = 'Squirtle';

// switch (pokemon) {
//   case 'Abra':
//     console.log('Abra is cool');
//     break;
//   default:
//     console.log('Your pokemon is also cool');
// }

// switch (pokemon) {
//   case 'Mewtu':
//     console.log('Mewtu is the coolest pokemon ever!');
//     break;
//   case 'Pikachu':
//     console.log('Pikachu is sweet');
//     break;
//   case 'Magikarp':
//   case 'Squirtle':
//     console.log('wow, water pokemon');
//     break;

//   default:
//     console.log('Your Pokemon is also cool');
// }

// FUNCTIONS
// function greet() {
//   console.log('Hello and welcome to JavaScript');
// }

// greet();

function add(a, b) {
  console.log(a + b);
}

// add(1, 3);
// add(5, 10);
// add(2000, 5000);

const divide = function (a, b) {
  // console.log(a / b);
  return a / b;
};

// divide(100, 10);
// console.log(divide(100, 10));

// ARROW FUNCTIONS ES6
const multiply = (a, b) => a * b;
// console.log(multiply(100, 10));

// EXAMPLE QUIZ
const question = 'What is the capital of France';
const options = ['Lyon', 'Paris', 'Lille'];
const correctAnswer = 'Paris';

function checkAnswer(userAnswer) {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log('Try again...');
  }
}

// console.log(question);
// console.log(options);
// checkAnswer('Paris');

// EXAMPLE PARTY
const checkAge = (age) => {
  if (age >= 18 && age <= 30) {
    return 'Welcome to the Party!';
  } else if (age > 30) {
    return 'You are too old';
  } else {
    const remainingYears = 18 - age;
    // return 'You need to wait' + remainingYears + 'year(s) to be 18.';
    return `You need to wait ${remainingYears} year(s) to be 18.`;
  }
};

// console.log(checkAge(25));

// LOOPS

// FOR LOOP
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// WHILE LOOP
// let n = 0;

// while (n < 5) {
//   console.log(n);
//   n++;
// }

// DO/WHILE LOOP
// let n = 0;

// do {
//   console.log(n);
//   n++;
// } while (n < 5);

// SCOPE
// var somethingg = 'John';

// if (somethingg === 'John') {
//   somethingg = 'Joe';
// }

// console.log(somethingg);

// let someone = 'John';

// if (someone === 'John') {
//   let someone = 'Joe';
//   console.log('Inner Scope:', someone);
// }

// console.log('Global Scope:', someone);
