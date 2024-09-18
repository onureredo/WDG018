import { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = useState('all');

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const newState = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <TodoContext.Provider value={{ setTodos, setFilter, toggleTodo, filteredTodos }}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
