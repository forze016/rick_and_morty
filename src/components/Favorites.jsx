import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions';
import Card from './Card';
import styles from './Favorites.module.css';

function Favorites(props) {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value === 'unknown' ? 'Unknown' : e.target.value;
    dispatch(filterCards(filterValue));
    setAux(!aux);
  };

  useEffect(() => {
    // Aquí puedes realizar alguna acción adicional al cargar los favoritos
  }, []);

  return (
    <div>
      <div className={styles.conteiner}>
      <h1>My Favorites</h1>
      <div className={styles.selectContainer}>
        <label htmlFor="orderSelect" className={styles.label}>
        </label>
        <select id="orderSelect" onChange={handleOrder} className={styles.select}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>

      <div className={styles.selectContainer}>
        <label htmlFor="filterSelect" className={styles.label}>
        </label>
        <select id="filterSelect" onChange={handleFilter} className={styles.select}>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      </div>
      <div className={styles.pers}>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} />
      ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
