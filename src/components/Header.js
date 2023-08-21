import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Header.css';

const Header = () => {
  const signOut = async () => {
    await Auth.signOut();
  };

  return (
    <div style={styles.header}>
      <Link to="/todos" style={styles.link}>
        Todo
      </Link>
      <Link to="/user" style={styles.link}>
        User
      </Link>
      <button onClick={signOut} style={styles.signOutButton}>
        Sign Out
      </button>
    </div>
  );
};

export default Header;
