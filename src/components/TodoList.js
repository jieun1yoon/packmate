import React, { useEffect, useState } from 'react';
import { fetchTodos } from './todoApi';
import { styles } from './styles';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};
