import React from 'react';
import styles from './Error404.module.css';

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorMessage}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorDescription}>Página no encontrada</p>
        <a href="/" className={styles.errorLink}>Volver a la página principal</a>
      </div>
    </div>
  );
};

export default Error404;
