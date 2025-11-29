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

  const handleGuardar = () => {
    const nuevaCarta: Omit<ICarta, 'id'> = {
      nombre,
      imagen,
      descripcion,
      tipo,
      rareza,
      ataque,
      defensa
    };
    onGuardar(nuevaCarta);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/30 shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">{cartaExistente ? '🛸' : '✨'}</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            {cartaExistente ? 'Editar Carta Cósmica' : 'Nueva Carta Cósmica'}
          </h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-cyan-300 mb-2 font-semibold">Nombre</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              placeholder="Nombre de la carta..."
            />
          </div>

          <div>
            <label className="block text-cyan-300 mb-2 font-semibold">Imagen URL</label>
            <input 
              type="text" 
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          <div>
            <label className="block text-cyan-300 mb-2 font-semibold">Descripción</label>
            <textarea 
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all h-24 resize-none"
              placeholder="Descripción de la carta..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-cyan-300 mb-2 font-semibold">Tipo</label>
              <div className="relative">
                <select 
                  value={tipo} 
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-800 text-gray-300">Seleccionar tipo</option>
                  <option value="Anime" className="bg-gray-800 text-cyan-300">Anime</option>
                  <option value="Toon" className="bg-gray-800 text-purple-300">Toon</option>
                  <option value="Guerrero" className="bg-gray-800 text-red-300">Guerrero</option>
                  <option value="Musico" className="bg-gray-800 text-green-300">Músico</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <span className="text-cyan-400">▼</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-cyan-300 mb-2 font-semibold">Rareza</label>
              <div className="relative">
                <select 
                  value={rareza} 
                  onChange={(e) => setRareza(e.target.value)}
                  className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-800 text-gray-300">Seleccionar rareza</option>
                  <option value="Común" className="bg-gray-800 text-gray-300">Común</option>
                  <option value="Rara" className="bg-gray-800 text-blue-300">Rara</option>
                  <option value="Épica" className="bg-gray-800 text-purple-300">Épica</option>
                  <option value="Legendaria" className="bg-gray-800 text-yellow-300">Legendaria</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <span className="text-cyan-400">▼</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-cyan-300 mb-2 font-semibold">Ataque</label>
              <input 
                type="number" 
                value={ataque}
                onChange={(e) => setAtaque(Number(e.target.value))}
                className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                min="0"
              />
            </div>

            <div>
              <label className="block text-cyan-300 mb-2 font-semibold">Defensa</label>
              <input 
                type="number" 
                value={defensa}
                onChange={(e) => setDefensa(Number(e.target.value))}
                className="w-full bg-gray-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                min="0"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={onCancelar}
              className="flex-1 bg-gray-600/80 hover:bg-gray-500 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-400/30 font-semibold"
            >
              🌑 Cancelar
            </button>
            <button 
              onClick={handleGuardar}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-cyan-400/30 font-semibold"
            >
              🚀 Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioCarta;