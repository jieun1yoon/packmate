import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

const UserPage = () => {
  const signOut = async () => {
    await Auth.signOut();
  };

  return (
    <div style={styles.container}>
      <h2>User Page</h2>
      <p>This is the user page content.</p>
      <button onClick={signOut} style={styles.signOutButton}>
        Sign Out
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    padding: 20,
  },
  signOutButton: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default withAuthenticator(UserPage);
