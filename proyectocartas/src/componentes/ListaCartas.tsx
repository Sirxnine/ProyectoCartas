import Carta from './Carta';

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
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cartas.map(carta => (
          <Carta 
            key={carta.id}
            carta={carta}
            onEditar={onEditarCarta}
            onEliminar={onEliminarCarta}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCartas;