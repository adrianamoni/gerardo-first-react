import logo from "./logo.svg";
import "./App.css";
import Coche from "./components/Coche";
import CocheV2 from "./components/CocheV2";
import Cochev3 from "./components/Cochev3";
/**Componente principal, desde aqui, estamos llamando a nuestros componentes más pequeños
 * como lo son Coche.jsx, CocheV2.jsx y Cochev3.jsx.
 * Recuerda, para usar componentes que estén declarados FUERA de App.js, debes importarlos
 * primero.
 */
function App() {
  //las constantes aqui declaradas, son arrays de strings y objetos que usamos para
  // pasar a los componentes en forma de props o propiedades
  const caracteristicasAudi = [
    "Marca: Audi ",
    "CC: 3.8",
    "Puertas: 3",
    "Color: Blanco",
    "Año: 2022",
  ];
  const caracteristicasJeep = [
    "Marca: Jeep ",
    "CC: 5.0",
    "Puertas: 5",
    "Color: Negro",
    "Año: 2022",
    "Extras: Mataburro",
    "Cauchos:Firestone Destination",
    "Snorkel: Si",
  ];

  const extrasBeetle = [
    { color: "Amarillo" },
    { techo: "Descapotable" },
    { rines: "Aluminio" },
    { periquito: "Rack tabla de surf en el techo" },
    { asientos: "Cuero" },
  ];
  /**
   * en el return, va la parte JSX o HTML de nuestro fichero,
   * aqui colocamos cosas como elementos o tags de html y también
   * componentes de React.
   */
  return (
    <div>
      <h1>Mi primera App</h1>
      <Coche
        nombre={"Focus"}
        caracteristicas={{
          marca: "Ford",
          cc: "2.0",
          puertas: 5,
          color: "Mostaza",
        }}
      />
      <Coche
        nombre={"Ibiza"}
        caracteristicas={{
          marca: "Seat",
          cc: "2.2",
          puertas: 3,
          color: "Blanco",
        }}
      />
      <CocheV2 nombre="R8" caracteristicasArr={caracteristicasAudi} />
      <CocheV2 nombre="Renegade" caracteristicasArr={caracteristicasJeep} />
      <Cochev3
        nombre={"Bettle"}
        marca={"Volkswagen"}
        cc={"1.8"}
        extras={extrasBeetle}
      />
    </div>
  );
}

export default App;
