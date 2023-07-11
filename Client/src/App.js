import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Nav from './components/Nav';
import Detail from './components/Detail';
import Cards from './components/Cards';
import About from './components/About';
import Error404 from './components/Error404';
import Form from './components/Form';
import Favorites from './components/Favorites';
import axios from 'axios';
import { validate } from './validation';

const EMAIL = 'facundonadaya@gmail.com';
const PASSWORD = '123456789';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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

  const handleLogin = (userData) => {
    const { email, password } = userData;
    const errors = validate(userData);

    if (Object.keys(errors).length > 0) {
      // Mostrar errores de validación
      console.log(errors);
      return;
    }

    if (email === EMAIL && password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('Credenciales incorrectas');
    }
  };

  useEffect(() => {
    if (!access && location.pathname !== '/') {
      navigate('/');
    }
  }, [access, location, navigate]);

  return (
    <div>
      {location.pathname !== '/' && <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />}
      <Routes>
        <Route path="/" element={<Form onLogin={handleLogin} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
