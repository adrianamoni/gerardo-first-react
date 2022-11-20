import React from "react";
/**ExtrasDeCoche es un componente dinámico, que recibe una sola prop, extras.
 * extras(prop) es un array de objetos, en este componente unicamente cogemos el array de objetos dinamicos,
 * y lo mapeamos dentro de un elemento <li> como hemos venido haciendo con otros componentes
 * La diferencia, es que dentro de la funcion map, devolvemos un <strong> con la KEY del objeto,
 * y al lado, un string normal con el value del objeto.
 *
 * Como NO sabemos cual es la definicion del objeto, no podemos acceder a sus props (periquito:mataburro)
 * no sabemos cuales serán las keys, y sin saber las keys, no podemos acceder a sus valores.
 *
 * Lo que hacemos es usar para las keys (Object.keys(obj) -> armamos un array de strings con todas las keys del objeto) y accedemos por medio de [0] (selector de posicion del array)
 * Lo que hacemos es usar para las values (Object.values(obj) -> armamos un array de strings con todos los values del objeto) y accedemos por medio de [0] (selector de posicion del array)
 */
const ExtrasDeCoche = ({ extras }) => {
  return (
    <ul>
      {extras.map((elemento) => (
        <li>
          <strong>{Object.keys(elemento)[0]}</strong>{" "}
          {Object.values(elemento)[0]}
        </li>
      ))}
    </ul>
  );
};

export default ExtrasDeCoche;
