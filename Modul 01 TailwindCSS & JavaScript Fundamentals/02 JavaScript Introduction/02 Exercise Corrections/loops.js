// LOOPS
// Array of animals in the zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// Task 1: Count total animals using a for loop
let totalCount = 0;
for (let i = 0; i < animals.length; i++) {
  totalCount++;
}
console.log(`Total animals in the zoo: ${totalCount}`);

// Task 2: Count animals with names of five or more letters using a while loop
let countFiveLettersOrMore = 0;
let index = 0;
while (index < animals.length) {
  if (animals[index].length >= 5) {
    countFiveLettersOrMore++;
  }
  index++;
}
console.log(
  `Animals with names of five or more letters: ${countFiveLettersOrMore}`
);

// Task 3: Count animals until a name starts with 'm' using a do...while loop
let countUntilM = 0;
let position = 0;
do {
  if (animals[position][0].toLowerCase() === 'm') {
    break;
  }
  countUntilM++;
  position++;
} while (position < animals.length);

console.log(
  `Number of animals counted until we reached one starting with 'm': ${countUntilM}`
);
