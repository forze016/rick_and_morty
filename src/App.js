import React, { useState } from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        const characterExists = characters.find((character) => character.id === data.id);
        if (characterExists) {
          window.alert('¡Este personaje ya está en la lista!');
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  }

  function addRandomCharacter() {
    axios('https://rickandmortyapi.com/api/character/').then(({ data }) => {
      const randomCharacter = data.results[0];
      const characterExists = characters.find((character) => character.id === randomCharacter.id);
      if (characterExists) {
        window.alert('¡Este personaje ya está en la lista!');
      } else {
        setCharacters((oldChars) => [...oldChars, randomCharacter]);
      }
    });
  }

  const onClose = (id) => {
    const newId = parseInt(id);
    setCharacters((personajes) => personajes.filter((personaje) => personaje.id !== newId));
  };

  return (
    <div>
      <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
