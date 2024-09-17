import { readFile } from 'fs/promises';

try {
  const fileContent = await readFile('shrek.txt', 'utf8');
  console.log(fileContent);
} catch (error) {
  console.error('there was an error:', error.message);
}
