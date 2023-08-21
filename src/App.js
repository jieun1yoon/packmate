import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import Header from './header';
import { UserPage } from './UserPage';

const App = () => {
  const signOut = async () => {
    await Auth.signOut();
  };

  return (
    <div style={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path="/user" component={UserPage} />
          <Route path="/todos">
            <h2>Amplify Todos</h2>
            <TodoForm />
            <TodoList />
          </Route>
          <Route path="/">
            <h2>Amplify Todos</h2>
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    padding: 20,
  },
};

export default withAuthenticator(App);
