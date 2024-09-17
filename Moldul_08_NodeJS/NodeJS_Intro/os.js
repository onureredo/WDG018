import os from 'os';

console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');

const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index}`);
  console.log(`Model ${cpu.model}`);
  console.log(`Speed ${cpu.speed}`);
});
