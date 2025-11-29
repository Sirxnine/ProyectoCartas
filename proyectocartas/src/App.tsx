import { useState } from 'react'
import './App.css'
import Header from './componentes/Header';
import ListaCartas from './componentes/ListaCartas';

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

const cartasIniciales: ICarta[] = [
  {
    id: 1,
    nombre: "Duki",
    imagen: "https://wallpapers.com/images/hd/duki-dragon-ball-cloud-rd5m0qun2l3u43ui.jpg",
    descripcion: "El Rey creador del trono musical",
    tipo: "Musico",
    rareza: "Legendaria",
    ataque: 300,
    defensa: 300
  },
  {
    id: 2,
    nombre: "Milo J",
    imagen: "https://images.genius.com/bc9018a99d67265c476dbaad883ba8d5.1000x1000x1.png", 
    descripcion: "El Heredero al Trono, la cura del alma",
    tipo: "Musico",
    rareza: "Épica",
    ataque: 200,
    defensa: 200
  }
];
function App() {
  const [cartas, setCartas] = useState<ICarta[]>(cartasIniciales);
  const [mostrarFormulario, setMostrarFormulario] = useState<boolean>(false);
  const [cartaEditando, setCartaEditando] = useState<ICarta | null>(null);

  const handleEditarCarta = (carta: ICarta) => {
  setCartaEditando(carta);
  setMostrarFormulario(true);
};

  const handleEliminarCarta = (id: number) => {
  eliminarCarta(id);
};
  const handleNuevaCarta = () => {
    setCartaEditando(null);
    setMostrarFormulario(true);
  };
  const agregarCarta = (nuevaCarta: Omit<ICarta, 'id'>) => {
  const cartaConId: ICarta = {
    ...nuevaCarta,
    id: Date.now() 
  };
  
  setCartas([...cartas, cartaConId]);
  setMostrarFormulario(false);
};
const editarCarta = (id: number, datosActualizados: Omit<ICarta, 'id'>) => {
  const cartasActualizadas = cartas.map(carta => {
    if (carta.id === id) {
      return { ...datosActualizados, id };
    }
    return carta;
  });
  
  setCartas(cartasActualizadas);
  setMostrarFormulario(false);
  setCartaEditando(null);
};
const eliminarCarta = (id: number) => {
  const cartasFiltradas = cartas.filter(carta => carta.id !== id);
  setCartas(cartasFiltradas);
};

  return (
    <div>
      <Header onNuevaCarta={handleNuevaCarta} />
      <ListaCartas 
        cartas={cartas}
        onEditarCarta={handleEditarCarta}
        onEliminarCarta={handleEliminarCarta}
      />
    </div>
  );
}


export default App
