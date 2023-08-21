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

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #ccc',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    margin: '0 10px',
    fontSize: '18px',
    fontWeight: 'bold',
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

export default Header;
