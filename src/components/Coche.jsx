import React from "react";
/**Coche es un componente que recibe 2 props, nombre, y caracteristicas
 * nombre es un string, características como puedes ver en su uso, es
 * un objeto que tiene: marca,cc,puertas y color como propiedades
 */
const Coche = ({ nombre, caracteristicas }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <strong>Características:</strong>
      <ul>
        <li>
          <strong>Marca:</strong> {caracteristicas.marca}
        </li>
        <li>
          <strong>CC:</strong> {caracteristicas.cc}
        </li>
        <li>
          <strong>Puertas:</strong> {caracteristicas.puertas}
        </li>
        <li>
          <strong>Color:</strong> {caracteristicas.color}
        </li>
      </ul>
    </div>
  );
};

export default Coche;
