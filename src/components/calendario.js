import React from 'react';

const Calendario = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
  const date = currentDate.toLocaleDateString();
  const year = currentDate.getFullYear();

  return (
    <div>
      <h1>Calendario</h1>
      
      {/* Display today's date, day, and year */}
      <div>
        <p>Today's Date: {date}</p>
        <p>Today's Day: {dayOfWeek}</p>
        <p>Current Year: {year}</p>
      </div>
      
      <div>
        <button>Button</button>
      </div>
    </div>
  );
};

export default Calendario;
