import { fetchStuff } from './src/fetches.js';
import { names as myNamesArray } from './src/utils.js';
import myCustomAdditionFunction from './src/utils.js';

console.log('Hallo Leute');

fetchStuff();

console.log(myCustomAdditionFunction(7, 5));

console.log(myNamesArray);
