import React, { useEffect, useState } from 'react';

export default function Footer(props) {
  const [saludo, setSaludo] = useState('Hola');

  function cambiarSaludo() {
    setSaludo(saludo + 'Chau');
  }

  return (
    <footer>
      <ul>
        <li>{saludo}</li>
        <li>Direccion: {props.empresa.direccion}</li>
        <li>Telefono: {props.empresa.telefono} </li>
        <li>{saludo}</li>
      </ul>
      <button onClick={cambiarSaludo}>Cambiar saludo</button>
      <p>{saludo}</p>
    </footer>
  );
}
