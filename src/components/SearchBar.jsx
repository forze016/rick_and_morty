import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          value={id}
          onChange={handleChange}
        />
        <button onClick={() => onSearch(id)} className={styles.searchButton}>
          Agregar
        </button>
      </div>
    </div>
  );
}
