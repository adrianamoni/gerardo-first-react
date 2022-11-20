import React from "react";
import ExtrasDeCoche from "./ExtrasDeCoche";
/**cochev3 es un componente MUY parecido a cochev2,
 * este recibe nombre, marca y cc que son las 3 strings (como puedes ver su uso es dentro de un h2)
 * y recibimos extras, que es un array de objetos. En este caso, estamos usando el array llamado
 * extrasBeetle declarado en App.js */
/**tambien, los extras los pasamos a su vez a otro componente más pequeño, llamado ExtrasDeCoche para
 * su manipulacion
 */
const Cochev3 = ({ nombre, marca, cc, extras }) => {
  return (
    <div>
      <h2>
        {nombre} - {marca} - {cc}
      </h2>
      <h3>Extras:</h3>
      <ExtrasDeCoche extras={extras} />
    </div>
  );
};

export default Cochev3;
