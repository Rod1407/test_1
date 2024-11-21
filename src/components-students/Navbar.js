import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Landing">Inicio</Link></li>
        <li><Link to="/calendario">Calendario</Link></li>
        <li><Link to="/asistencias">Asistencias</Link></li>
        <li><Link to="/actividades">Actividades</Link></li>
        <li><Link to="/Login">Iniciar Sesion</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;