const todoListElement = document.getElementById('todo-list');

async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    // console.log(todos);
    displayTodos(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

// Function to display todos in DOM
function displayTodos(todos) {
  todoListElement.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.title;
    todoItem.classList.add('mb-2');

    if (todo.completed) {
      todoItem.classList.add('line-through', 'text-green-500');
    } else {
      todoItem.classList.add('text-red-500');
    }

    todoListElement.appendChild(todoItem);
  });
}

fetchTodos();
