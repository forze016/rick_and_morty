import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
 /*    <div>
      <h2>About Me</h2>
      <p>¡Hola! Soy Facundo Nadaya.</p>
    </div> */

<div className="container">
<div className="row">
  <div className="col-md-6">
    <img src="https://globalnews.ca/wp-content/uploads/2022/09/MicrosoftTeams-image-16.jpg?quality=85&strip=all" alt="Imagen de Ricky and Morty" className="img-fluid" />
  </div>
  <div className="col-md-6">
    <h1 className="text-white">About</h1>
    <p className="text-white">Bienvenido a la página de Ricky and Morty. Mi Nombre es Facundo Nadaya y soy un apasionado por la programación mis redes sociales para contactarme son las siguientes</p>
    <div className="d-grid gap-2">
      <a href="https://www.linkedin.com/in/facundo-nadaya/" className="btn btn-primary">Linkedin</a>
      <a href="https://github.com/forze016" className="btn btn-dark">Github</a>
    </div>
  </div>
</div>
</div>
  );
};

export default About;