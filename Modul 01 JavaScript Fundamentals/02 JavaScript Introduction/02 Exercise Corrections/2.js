// 1- Create a variable that stores a number.
let num = 10;

// Create a variable that stores a string representation of a number.
let strNum = '5';

// Add these two variables and print the result.
let additionResult = num + strNum;
console.log('Addition Result: ', additionResult);

// Die Ausgabe ist "105", weil JavaScript eine Typkonvertierung durchführt und die Zahl während der Addition als String behandelt, was zu einer Verkettung führt.

// 2 - Subtract the string from the number and print the result.
let subtractionResult = num - strNum;
console.log('Subtraction Result: ', subtractionResult);

// Die Ausgabe ist 5, weil JavaScript den String in eine Zahl umwandelt, wenn die Subtraktion durchgeführt wird, im Gegensatz zur Addition, bei der es zur Verkettung kommt.

// 3- Multiply the string variable by a new number and print the result.
let multiplicationResult = strNum * 2;
console.log('Multiplication Result: ', multiplicationResult);

// JavaScript wandelt den String für die Multiplikation in eine Zahl um.

// 4 - Divide a number by the string variable and print the result.
let divisionResult = num / strNum;
console.log('Division Result: ', divisionResult);

// JavaScript wandelt den String für die Division in eine Zahl um.

// 5 - Use modulus on two number variables and print the result.
let num1 = 15;
let num2 = 4;
let modulusResult = num1 % num2;
console.log('Modulus Result (Number): ', modulusResult);

// Change one of the numbers to a string and perform the modulus operation again. Print the result.
let strNum2 = '4';
let modulusResultWithString = num1 % strNum2;
console.log('Modulus Result (String): ', modulusResultWithString);

// JavaScript wandelt den String für die Modulus-Operation in eine Zahl um.

// 6 - Define several new numeric variables.
let a = 8;
let b = 3;
let c = 2;

// Perform and print the result of each operation: addition, subtraction, multiplication, division, and modulus.
let addSeriesResult = a + b + c;
console.log('Addition Series Result: ', addSeriesResult);

let subtractSeriesResult = a - b - c;
console.log('Subtraction Series Result: ', subtractSeriesResult);

let multiplySeriesResult = a * b * c;
console.log('Multiplication Series Result: ', multiplySeriesResult);

let divideSeriesResult = a / b / c;
console.log('Division Series Result: ', divideSeriesResult);

let modulusSeriesResult = (a % b) % c;
console.log('Modulus Series Result: ', modulusSeriesResult);

// Jede Operation enthält mindestens ein Beispiel, das mehr als zwei Zahlen verwendet.
