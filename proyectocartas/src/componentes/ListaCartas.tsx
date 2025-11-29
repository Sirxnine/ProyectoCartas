import Carta from './Carta';

// Definimos la interfaz aquí también
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

function ListaCartas({ cartas, onEditarCarta, onEliminarCarta }: { 
  cartas: ICarta[];
  onEditarCarta: (carta: ICarta) => void;
  onEliminarCarta: (id: number) => void;
}) {
  return (
    <div className="lista-cartas">
      {cartas.map(carta => (
        <Carta 
          key={carta.id}
          carta={carta}
          onEditar={onEditarCarta}
          onEliminar={onEliminarCarta}
        />
      ))}
    </div>
  );
}

export default ListaCartas;