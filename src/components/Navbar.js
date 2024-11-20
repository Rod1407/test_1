import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Landing">Inicio</Link></li>
        <li><Link to="">Calendario</Link></li>
        <li><Link to="">Asistencias</Link></li>
        <li><Link to="">Actividades</Link></li>
        <li><Link to="/Login">Iniciar Sesion</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;