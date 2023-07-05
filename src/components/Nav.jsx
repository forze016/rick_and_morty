import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';
import styles from './Nav.module.css';

const Nav = ({ onSearch, addRandomCharacter }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link className={styles.logoColor} to="/">RIck And Morfy</Link>
      </div>

      <div className={styles.menu}>
        <NavLink to="/about" activeClassName={styles.active}>
          <button>About</button>
        </NavLink>
        <NavLink to="/" exact activeClassName={styles.active}>
          <button>Home</button>
        </NavLink>
        <NavLink to="/favorites" activeClassName={styles.active}>
          <button>Favorites</button>
        </NavLink>
      </div>

      <SearchBar onSearch={onSearch} />
      <button onClick={addRandomCharacter}>Random</button>
    </nav>
  );
};

export default Nav;
