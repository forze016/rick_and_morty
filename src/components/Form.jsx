import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear objeto con los datos del usuario
    const userData = {
      email,
      password
    };

    // Llamar a la función de inicio de sesión del padre
    onLogin(userData);
  };

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label} htmlFor="email">Email:</label>
        <input
        className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="password">Password:</label>
        <input
        className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">LOGIN</button>
    </form>
  );
};

export default Form;
