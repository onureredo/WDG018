// Arrays sind Datenstrukturen, die wir verwenden, um eine Sammlung von Elementen zu speichern.
// Sie haben besondere Eigenschaften und Methoden.
// Arrays sind null-index-listen. D.h.
// Jedes Element hat einen Index, also eine Positionsnummer in der Liste, die bei 0 beginnt.

// Initialize an array with different types of values
// const myArr = [42, 'Hello World!', true, 3.14, 'JavaScript'];

// Print the array to the console
// console.log(myArray);

// Access and print each element of the array
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// myArray.forEach((el) => console.log(el));

// Modify the second element of the array
// myArray[1] = 'Changed Value';
// console.log(myArray);

// PUSH, POP, SHIFT & UNSHIFT
// Initialize an array with initial values
// const myArray = [1, 2, 3, 4, 5];

// Use the .push method to add the values 6 and 7 to the end of the array.
// myArray.push(6);
// myArray.push(7, 8, 9, 10);
// console.log(myArray);

// Remove the Last Element from the Array
// myArray.pop();
// console.log(myArray);

// Remove the First Element from the Array
// myArray.shift();
// console.log(myArray);

// Use the .unshift method to add the values 0 and -1 to the beginning of the array.
// myArray.unshift(-1, 0);
// console.log(myArray);

// REVERSE Methode kehrt die Reihenfolge der Elemente in einem Array um.
// Diese Methode verändert das ursprüngliche Array.

// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];

// Use reverse() method
// console.log('Original array1:', array1);
// array1.reverse();
// console.log('Reversed array1:', array1);

// toReversed erstellt ein neues Array, das die umgekehrte Version des ursprünglichen Arrays ist.
// Diese Methode verändert das ursprüngliche Array nicht.

// Use toReversed() method
// Create a reversed copy of array2 and print both arrays
// console.log('Original array2:', array2);
// const reversedArray2 = array2.toReversed();
// console.log('Reversed copy of array2:', reversedArray2);
// console.log('Original array2 after toReversed:', array2);

// UNTERSCHIED zwischen reverse & toReversed
// const reversedArray = array1.reversed - toReversed();
// console.log(reversedArray);
// console.log(array1);

// SPLICE fügt Elemente an einer bestimmten Position in ein Array ein oder entfernt sie von dort.
// Diese Methode verändert das ursprüngliche Array.
// array.splice(start, deleteCount, item1, item2, ...)

// const array1 = [10, 20, 30, 40, 50];

// Modify array1 in place by removing 1 element at index 2 and adding 35, 36

// console.log(array1);
// array1.splice(2, 1, 35, 36); // Entferne 1 Element ab Index 2 und füge 35 und 36 an dieser Stelle hinzu
// console.log(array1);

// toSpliced Methode erstellt ein neues Array mit hinzugefügten, entfernten oder beiden Elementen, ohne das ursprüngliche Array zu verändern.
// Remove the element at index 1 and add b and c with toSpliced
// Syntax: array.toSpliced(start, deleteCount, item1, item2, ...)

// const array2 = ['x', 'y', 'z'];
// console.log('Original array2:', array2);
// const modifiedArray2 = array2.toSpliced(1, 1, 'a', 'b');
// console.log('Modified copy of array2:', modifiedArray2);
// console.log('Original array2 after toSpliced', array2);

// SLICE erstellt eine Teilkopie eines Arrays und gibt diese als neues Array zurück, ohne das ursprüngliche Array zu verändern.
// const array = [2, 4, 6, 8, 10, 12, 14, 16];
// console.log(array);

// const slicedArray = array.slice(1, 4); // From index 1 to 3
// console.log('from index 1 to 3', slicedArray);

// const slicedArray2 = array.slice(3); // from index 3 to the end
// console.log('from index 3 to the end', slicedArray2);

// const slicedArray3 = array.slice(-4); // The last 4 elements
// console.log('from last 4 elements):', slicedArray3);

// console.log('Original array after slicing:', array);

// JOIN verbindet alle Elemente eines Arrays zu einem einzigen String.
// join akzeptiert ein optionales Trennzeichen als Parameter.
// Wenn kein Trennzeichen angegeben wird, verwendet join standardmäßig ein Komma.

// const array = ['apple', 'banana', 'cherry', 'date'];
// const defaultJoin = array.join(); // Standard-Trennzeichen (Komma)
// console.log(defaultJoin);

// const dashJoin = array.join('-'); // dash als Trennzeichen
// console.log(dashJoin);

// const spaceJoin = array.join(' '); // space als Trennzeichen
// console.log(spaceJoin);

// const andJoin = array.join(' and '); // 'and ' als Trennzeichen
// console.log(andJoin);

// const noDelimeterJoin = array.join(''); // ohne Trennzeichen
// console.log(noDelimeterJoin);

// console.log('Original Array:', array);

// LOOPS
// const numberArray = [10, 20, 30, 40, 50];

// Step 2: Iterate over the array with a for loop
// for (let i = 0; i < numberArray.length; i++) {
//   console.log(numberArray[i]);
// }

// Step 3: Iterate over the array with a for...of loop
// Die for...of-Schleife macht es einfacher, über die Werte eines Arrays zu iterieren
// ohne sich um die Indizes[indexe] kümmern zu müssen, und ist besonders nützlich für einfache Iterationen.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for (const element of numberArray) {
//   console.log(element);
// }

// numberArray.forEach((el) => console.log(el));
