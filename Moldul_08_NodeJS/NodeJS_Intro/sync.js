import fs from 'fs';

console.log('Starting synchronous file read');

try {
  const data = fs.readFileSync('shrek.txt', 'utf8');
  console.log(data);
  console.log('Finished synchronous file read');
} catch (error) {
  console.log('error reading file', error.message);
}

console.log('Continuing with other operations');
