import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles.card} tabindex="0"><img src={image} alt={name} className="card-image" />

      <div className={styles.text}>
        <h2 className={styles.h2text}>{name}</h2>
        
          <p className={styles.ptext}>Status: {status}</p>
          <p className={styles.ptext}>Gender: {gender}</p>
          <p className={styles.ptext}>Origin: {origin.name}</p>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

