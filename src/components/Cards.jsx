import React, { useState } from 'react';
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
  const { characters } = props;
  const [visibleCards, setVisibleCards] = useState(characters);

  const handleCardClose = (id) => {
    const updatedCards = visibleCards.filter((card) => card.id !== id);
    setVisibleCards(updatedCards);
  };

  return (
    <div className={styles.cards}>
      {visibleCards.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={() => handleCardClose(character.id)}
        />
      ))}
    </div>
  );
}
