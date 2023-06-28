import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
   onSearch(searchTerm);
   setSearchTerm('');
 };
   return (
      <div className={styles.wrap}>
        <div className={styles.search}>
      <input
        type="text"
        className={styles.searchTerm}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch} className={styles.searchButton}>Agregar</button>
        </div>
    </div>
   );
}