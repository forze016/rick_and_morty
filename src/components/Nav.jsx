import React from 'react';
import SearchBar from './SearchBar';
import styles from './Nav.module.css'

const Nav = ({ onSearch, addRandomCharacter }) => {
  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <button onClick={addRandomCharacter}>Random</button>
    </nav>
  );
};

export default Nav;
