import { CalendarioReservas } from "./components/CalendarioReservas.jsx";
import { EspaciosDisponibles } from "./components/EspaciosDisponibles.jsx";

function App() {
  return (
    <>
      <h1 className="ml-24 mr-24 font-bold">Reserva Espacios Luis Amigó</h1>
      <div className="ml-24 mr-24 mt-24 flex space-x-4">
        <EspaciosDisponibles />
        <CalendarioReservas />
      </div>
    </>
  );
}

export default App;
