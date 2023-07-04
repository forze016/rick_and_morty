import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Detail from './components/Detail';
import Cards from './components/Cards';
import About from './components/About';
import Error404 from './components/Error404';
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
      <Routes>
          <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
    </Routes>

    </div>
  );
}

export default App;
