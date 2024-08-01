// COMPARISONS
// Strict vs Simple Equality and Inequality
console.log('5 == "5": ', 5 == '5'); // Einfache Gleichheit, true
console.log('5 === "5": ', 5 === '5'); // Strikte Gleichheit, false

console.log('10 != "10": ', 10 != '10'); // Einfache Ungleichheit, false
console.log('10 !== "10": ', 10 !== '10'); // Strikte Ungleichheit, true

// Greater than, Less than, Greater than or Equal to, Less than or Equal to
console.log('5 > 3: ', 5 > 3); // Wahr
console.log('"5" > "3": ', '5' > '3'); // Wahr, String-Vergleich

console.log('10 < 20: ', 10 < 20); // Wahr
console.log('"10" < "20": ', '10' < '20'); // Wahr, String-Vergleich

console.log('5 >= 5: ', 5 >= 5); // Wahr
console.log('"5" >= 5: ', '5' >= 5); // Wahr, Typumwandlung von String zu Zahl

console.log('10 <= 20: ', 10 <= 20); // Wahr
console.log('"10" <= "20": ', '10' <= '20'); // Wahr, String-Vergleich

// Additional comparisons to illustrate different outcomes
console.log('true == "true": ', true == 'true'); // Falsch, unterschiedliche Typen und Werte
console.log('false === false: ', false === false); // Wahr, gleicher Typ und Wert
console.log('0 == false: ', 0 == false); // Wahr, Typumwandlung macht sie gleichwertig
console.log('0 === false: ', 0 === false); // Falsch, keine Typumwandlung und unterschiedliche Typen
