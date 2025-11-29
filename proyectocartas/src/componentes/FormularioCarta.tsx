import { useState, useEffect } from 'react';


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

function FormularioCarta({ 
  cartaExistente, 
  onGuardar, 
  onCancelar 
}: { 
  cartaExistente: ICarta | null;
  onGuardar: (carta: Omit<ICarta, 'id'>) => void;
  onCancelar: () => void;
}) {
 
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [rareza, setRareza] = useState('');
  const [ataque, setAtaque] = useState(0);
  const [defensa, setDefensa] = useState(0);

  return (
    <div className="formulario-carta">
      <h2>{cartaExistente ? 'Editar Carta' : 'Nueva Carta'}</h2>
      { }
    </div>
  );
  useEffect(() => {
  if (cartaExistente) {
  
    setNombre(cartaExistente.nombre);
    setImagen(cartaExistente.imagen);
    setDescripcion(cartaExistente.descripcion);
    setTipo(cartaExistente.tipo);
    setRareza(cartaExistente.rareza);
    setAtaque(cartaExistente.ataque);
    setDefensa(cartaExistente.defensa);
  } else {
  
    setNombre('');
    setImagen('');
    setDescripcion('');
    setTipo('');
    setRareza('');
    setAtaque(0);
    setDefensa(0);
  }
}, [cartaExistente]);
}


export default FormularioCarta;