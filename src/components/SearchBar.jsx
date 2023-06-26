import React, { useState } from 'react';
export default function SearchBar(props) {
   const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
   onSearch(searchTerm);
   setSearchTerm('');
 };
   return (
      <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
   );
}