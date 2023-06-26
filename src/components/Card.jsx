import React from 'react';

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-body">
        <img src={image} alt={name} className="card-image" />
        <div className="card-info">
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
    </div>
  );
}

