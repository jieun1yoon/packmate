import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, listTodos } from './graphql/operations';

export const fetchTodos = async () => {
  try {
    const todoData = await API.graphql(graphqlOperation(listTodos));
    return todoData.data.listTodos.items;
  } catch (err) {
    console.log('error fetching todos', err);
    return [];
  }
};

export const addTodo = async (todo) => {
  try {
    await API.graphql(graphqlOperation(createTodo, { input: todo }));
  } catch (err) {
    console.log('error creating todo:', err);
  }
};
