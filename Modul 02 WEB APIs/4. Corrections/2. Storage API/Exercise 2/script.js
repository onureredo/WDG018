const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reload = document.querySelector('#reload');

const createListItem = (newTask) => {
  const li = document.createElement('li');
  li.setAttribute('id', newTask.id);
  li.textContent = newTask.content;
  li.classList.add('flex', 'items-center', 'justify-between', 'w-full', 'my-2');

  // Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add(
    'px-4',
    'py-2',
    'bg-red-500',
    'hover:bg-red-400',
    'text-white',
    'rounded-lg'
  );

  deleteBtn.addEventListener('click', () => {
    const itemToDelete = ul.querySelector(`#${newTask.id}`);
    let existingTasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    existingTasks = existingTasks.filter((t) => t.id !== newTask.id);

    if (existingTasks.length === 0) {
      localStorage.removeItem('myTasks');
    } else {
      localStorage.setItem('myTasks', JSON.stringify(existingTasks));
    }

    itemToDelete.remove();
  });

  li.appendChild(deleteBtn);
  return li;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userInput = e.target.elements.userInput.value;
  if (!userInput) return alert('Please enter something before submitting');

  const myTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  const newTask = {
    id: `task-${crypto.randomUUID().replaceAll('-', '')}`,
    content: userInput,
  };

  const li = createListItem(newTask);
  ul.insertBefore(li, ul.firstElementChild); // DOM
  myTasks.unshift(newTask); // LocalStorage
  localStorage.setItem('myTasks', JSON.stringify(myTasks));
  e.target.reset();
});

reload.addEventListener('click', () => {
  window.location.reload();
});

window.addEventListener('load', () => {
  const myTasks = JSON.parse(localStorage.getItem('myTasks')) || [];

  myTasks.forEach((t) => {
    const li = createListItem(t);
    ul.appendChild(li);
  });
});
