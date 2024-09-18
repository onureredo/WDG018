import { useContext } from 'react';
import ToDoItem from './ToDoItem';
import { TodoContext } from '../contexts/TodoContext';

const ToDoList = () => {
  const { filteredTodos: todos, toggleTodo } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
