import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert('Ocurrió un error al cargar el personaje');
      });

    return () => {
      setCharacter({});
    };
  }, [id]);

  return (
    <div className={styles.detailCard}>
      <div className={styles.detailCardImage}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.detailCardInfo}>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin && character.origin.name}</p>
      </div>
    </div>
  );
};

export default Detail;
