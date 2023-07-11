import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const { name, status, species, gender, origin, image, onClose, id, myFavorites, removeFav, addFav } = props;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
        break;
      }
    }
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id.toString());
    } else {
      addFav(props);
    }
    setIsFav(!isFav);
  };

  return (
    <div className={styles.card} tabIndex="0">
      <img src={image} alt={name} className={styles.cardImage} />

      <div className={styles.text}>
        <h2 className={styles.h2text}>{name}</h2>
        <p className={styles.ptext}>Status: {status}</p>
        <p className={styles.ptext}>Gender: {gender}</p>
        <p className={styles.ptext}>Species: {species}</p>
        <p className={styles.ptext}>Origin: {origin.name}</p>
        <button className={styles.closeBtn} onClick={() => onClose(id)}>
          X
        </button>
        <Link to={`/detail/${id}`} className={`${styles.cardLink} ${styles.ignoreScale}`}>
          <button>Detail</button>
        </Link>
        {isFav ? (
          <button className={styles.favoriteBtn} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.favoriteBtn} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = {
  addFav,
  removeFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
