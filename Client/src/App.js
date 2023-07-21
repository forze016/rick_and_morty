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

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function onSearch(id) {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
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
    } catch (error) {
      console.error(error);
    }
  }

  async function addRandomCharacter() {
    try {
      const { data } = await axios('https://rickandmortyapi.com/api/character/');
      const randomCharacter = data.results[0];
      const characterExists = characters.find((character) => character.id === randomCharacter.id);
      if (characterExists) {
        window.alert('¡Este personaje ya está en la lista!');
      } else {
        setCharacters((oldChars) => [...oldChars, randomCharacter]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onClose = (id) => {
    const newId = parseInt(id);
    console.log("entramos", id)
    setCharacters((personajes) => personajes.filter((personaje) => personaje.id !== newId));
  };

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios.get(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!access && location.pathname !== '/') {
      navigate('/');
    }
  }, [access, location, navigate]);

  return (
    <div>
      {location.pathname !== '/' && <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />}
      <Routes>
        <Route path="/" element={<Form onLogin={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;