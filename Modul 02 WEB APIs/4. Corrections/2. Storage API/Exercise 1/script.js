// Get elements from DOM
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reload = document.querySelector('#reload');

// Add event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userInput = e.target.elements.userInput.value;
  if (!userInput) return alert('Please enter something before submitting');

  const myQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];
  const li = document.createElement('li');
  li.textContent = userInput;
  ul.insertBefore(li, ul.firstElementChild); // adding to DOM as firstElement
  myQuotes.unshift(userInput); // adding to LocalStorage as firstElement
  localStorage.setItem('myQuotes', JSON.stringify(myQuotes));
  e.target.reset();
});

// Reload event
reload.addEventListener('click', () => {
  window.location.reload();
});

// Read and load data
window.addEventListener('load', () => {
  const myQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];

  myQuotes.forEach((quotes) => {
    const li = document.createElement('li');
    li.textContent = quotes;
    ul.appendChild(li);
  });
});
