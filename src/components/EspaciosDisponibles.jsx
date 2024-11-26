export const EspaciosDisponibles = () => {
  return (
    <div className="h-1/2 w-1/2">
      <div className="border border-solid border-gray-700 rounded-md p-3">
        <h2 className="font-bold">Espacios Disponibles</h2>
        <h3>Seleccionar un espacio para resevar</h3>
        <select
          className="w-full border border-solid border-r-slate-950 rounded-md"
          name="hola"
          id=""
        >
          <option value="1">Espacio 1</option>
          <option value="2">Espacio 2</option>
          <option value="3">Espacio 3</option>
          <option value="4">Espacio 4</option>
          <option value="5">Espacio 5</option>
        </select>
      </div>
    </div>
  );
};
