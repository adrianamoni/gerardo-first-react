import React from "react";
/**cochev2 es im componente que recibe nombre "string" y caracteristicasArr
 * como su nombre lo dice, es un array que vamos a "mapear", devolviendo
 * un elemento <li> por CADA elemento de ese array.
 */
const CocheV2 = ({ nombre, caracteristicasArr }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <strong>Características:</strong>
      <ul>
        {caracteristicasArr?.map((elemento) => (
          <li>{elemento}</li>
        ))}
      </ul>
    </div>
  );
};

export default CocheV2;
