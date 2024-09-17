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
