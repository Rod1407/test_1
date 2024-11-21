import React from 'react';

const Calendario = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
  const date = currentDate.toLocaleDateString();
  const year = currentDate.getFullYear();

  const imageUrl = "URL_DE_TU_IMAGEN_AQUI"; // TODO: CAmbiar con URL de base de datos

  return (
    <div>
      <h1>Calendario</h1>
      
      <div>
        <p>Today's Date: {date}</p>
        <p>Today's Day: {dayOfWeek}</p>
        <p>Current Year: {year}</p>
      </div>
      
      <div>
        {/* URL de la imagen */}
        <img 
          src={imageUrl} 
          alt="Calendario" 
        />
      </div>
    </div>
  );
};

export default Calendario;
