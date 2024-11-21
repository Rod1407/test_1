import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes> 
        <Route path="/Landing" element={<Landing />} />
       {/* <Route path="/calendario" element={<Calendario />} /> */}
        {/* <Route path="/asistencias" element={<Asistencias />} /> */}
        {/* <Route path="/actividades" element={<Actividades />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;