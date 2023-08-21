import React, { useState } from 'react';
import { addTodo } from './todoApi';
import { styles } from './styles';

export const TodoForm = () => {
  const [formState, setFormState] = useState({ name: '', description: '' });

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const handleAddTodo = () => {
    if (!formState.name || !formState.description) return;

    const todo = { ...formState };
    addTodo(todo);
    setFormState({ name: '', description: '' });
  };

  return (
    <div>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={handleAddTodo}>
        Create Todo
      </button>
    </div>
  );
};
