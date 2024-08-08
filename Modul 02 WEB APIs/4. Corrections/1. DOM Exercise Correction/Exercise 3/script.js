// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Select the buttons and the ul element
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

// Attach event to add a new li to the ul
addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = tasks[Math.floor(Math.random() * tasks.length)];
  itemList.appendChild(newItem);
});

// Attach event to display an alert
alertBtn.addEventListener('click', () => alert('Alert msg'));

// Attach event to output a message to the console
consoleBtn.addEventListener('click', () => console.log('button was clicked'));
