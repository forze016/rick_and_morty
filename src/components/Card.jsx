import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose, id } = props;

  return (
    <div className={styles.card} tabindex="0">
      <img src={image} alt={name} className="card-image" />

      <div className={styles.text}>
        <h2 className={styles.h2text}>{name}</h2>
        <p className={styles.ptext}>Status: {status}</p>
        <p className={styles.ptext}>Gender: {gender}</p>
        <p className={styles.ptext}>Species: {species}</p>
        <p className={styles.ptext}>Origin: {origin.name}</p>
        <button className="close-btn" onClick={() => onClose(id)}>
          X
        </button>
      <Link to={`/detail/${id}`} className={`${styles.cardLink} ${styles.ignoreScale}`}>
        <button>Detail</button>
      </Link>
      </div>
    </div>
  );
}


