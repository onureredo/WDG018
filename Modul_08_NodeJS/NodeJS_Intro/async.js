import fs from 'fs';

console.log('Starting asynchronous file read');

fs.readFile('shrek.txt', 'utf-8', (error, data) => {
  if (error) {
    return console.log('Error reading file:', error.message);
  }
  console.log(data);
  console.log('Finished reading file asynchronously');
});

console.log('Continuing with other operations');

// import { readFile } from 'fs/promises';

// console.log('start');
// try {
//   const fileContent = await readFile('shrek.txt', 'utf8');
//   console.log(fileContent);
// } catch (error) {
//   console.error('there was an error:', error.message);
// }
// console.log('end');
