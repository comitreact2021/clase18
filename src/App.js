import React, { useState } from 'react';
import Header from './components/Header';
import Barradenavegacion from './components/BarraDeNavegacion';
import Footer from './components/Footer';

export default function App() {
  const empresa = {
    nombre: 'ML',
    direccion: 'Direccion ML',
    telefono: '1111133213',
  };

  const [usuario, setUsuario] = useState('Linus');

  function changeUser() {
    setUsuario('Elon');
  }

  return (
    <>
      <Header nombreEmpresa={empresa.nombre} />
      <Barradenavegacion nombreEmpresa={empresa.nombre} usuario={usuario} />
      <Footer empresa={empresa} />

      <button onClick={changeUser} className="btn btn-primary">
        Cambiar usuario
      </button>
    </>
  );
}
