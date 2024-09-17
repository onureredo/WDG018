import { writeFile } from 'fs/promises';

try {
  await writeFile('shrek.txt', 'Shrek is love, Shrek is life');
  console.log('successfully created shrek.txt');
} catch (error) {
  console.error('there was an error:', error.message);
}
