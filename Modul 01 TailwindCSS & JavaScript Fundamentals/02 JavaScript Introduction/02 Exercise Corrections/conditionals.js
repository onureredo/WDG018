// CONDITIONALS
// Current temperature in degrees Celsius
const temperature = 20; // You can change this value for different outcomes

// Task 1: Simple if/else
if (temperature < 15) {
  console.log("It's cold, wear a coat.");
} else {
  console.log("It's not too cold, no coat needed.");
}

// Task 2: Using if/else if/else
if (temperature < 15) {
  console.log("It's cold, wear a coat.");
} else if (temperature <= 25) {
  console.log("It's mild, wear a sweater.");
} else {
  console.log("It's warm, wear a t-shirt.");
}

// Task 3: Using switch
switch (true) {
  case temperature === 10:
    console.log("It's very cold, definitely wear a coat.");
    break;
  case temperature === 20:
    console.log('Nice and comfortable, a sweater will do.');
    break;
  case temperature === 30:
    console.log('Quite warm, a t-shirt is perfect.');
    break;
  default:
    console.log('Enter a specific temperature like 10, 20, or 30 degrees.');
}
