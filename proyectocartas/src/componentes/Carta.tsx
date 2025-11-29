interface ICarta {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  tipo: string;
  rareza: string;
  ataque: number;
  defensa: number;
}


function Carta({ carta, onEditar, onEliminar }: { 
  carta: ICarta;
  onEditar: (carta: ICarta) => void;
  onEliminar: (id: number) => void;
}) {
  return (
    <div className="carta">
      <h3>{carta.nombre}</h3>
      <p>Tipo: {carta.tipo}</p>
      <p>Rareza: {carta.rareza}</p>
      <p>Ataque: {carta.ataque}</p>
      <p>Defensa: {carta.defensa}</p>
      <p>{carta.descripcion}</p>
      <button onClick={() => onEditar(carta)}>Editar</button>
      <button onClick={() => onEliminar(carta.id)}>Eliminar</button>
    </div>
  );
}

export default Carta;