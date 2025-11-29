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
  const getRarezaColor = (rareza: string) => {
    switch(rareza) {
      case 'Legendaria': return 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-yellow-500/50';
      case 'Épica': return 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500/50';
      case 'Rara': return 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/50';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 shadow-gray-500/50';
    }
  };

  const getRarezaGlow = (rareza: string) => {
    switch(rareza) {
      case 'Legendaria': return 'hover:shadow-yellow-400/30';
      case 'Épica': return 'hover:shadow-purple-400/30';
      case 'Rara': return 'hover:shadow-blue-400/30';
      default: return 'hover:shadow-cyan-400/30';
    }
  };

  return (
    <div className={`group bg-gray-800/40 backdrop-blur-lg rounded-2xl p-5 border border-cyan-400/10 shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl ${getRarezaGlow(carta.rareza)} relative overflow-hidden`}>
      
      {/* Efecto de partículas cósmicas */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Efecto de borde brillante al hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/10 group-hover:to-blue-500/20 transition-all duration-1000" />
      
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={carta.imagen} 
          alt={carta.nombre}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Efecto de brillo en la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
        
        <div className={`absolute top-3 right-3 ${getRarezaColor(carta.rareza)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
          {carta.rareza}
        </div>
        
        <div className="absolute top-3 left-3 bg-black/70 text-cyan-300 text-xs px-2 py-1 rounded-full border border-cyan-400/40 backdrop-blur-sm">
          ID: {carta.id}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-cyan-100 mb-3 text-center group-hover:text-cyan-50 transition-colors duration-500 relative z-10">
        {carta.nombre}
      </h3>
      
      <div className="space-y-2 mb-4 relative z-10">
        <div className="flex justify-between items-center text-sm bg-gray-700/30 rounded-lg px-3 py-2 group-hover:bg-gray-700/50 transition-all duration-300">
          <span className="text-gray-400">🌌 Tipo</span>
          <span className="text-cyan-300 font-semibold">{carta.tipo}</span>
        </div>
        <div className="flex justify-between items-center text-sm bg-gray-700/30 rounded-lg px-3 py-2 group-hover:bg-gray-700/50 transition-all duration-300">
          <span className="text-gray-400">💫 Rareza</span>
          <span className="text-purple-300 font-semibold">{carta.rareza}</span>
        </div>
        <div className="flex justify-between items-center text-sm bg-gray-700/30 rounded-lg px-3 py-2 group-hover:bg-gray-700/50 transition-all duration-300">
          <span className="text-gray-400">💥 Ataque</span>
          <span className="text-red-300 font-semibold">{carta.ataque}</span>
        </div>
        <div className="flex justify-between items-center text-sm bg-gray-700/30 rounded-lg px-3 py-2 group-hover:bg-gray-700/50 transition-all duration-300">
          <span className="text-gray-400">🛡️ Defensa</span>
          <span className="text-blue-300 font-semibold">{carta.defensa}</span>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm italic text-center mb-4 leading-relaxed relative z-10">
        {carta.descripcion}
      </p>
      
      <div className="flex gap-2 relative z-10">
        <button 
          onClick={() => onEditar(carta)}
          className="flex-1 bg-gradient-to-r from-cyan-600/90 to-blue-600/90 hover:from-cyan-500 hover:to-blue-500 text-white py-3 rounded-xl transition-all duration-500 hover:scale-105 border border-cyan-400/40 font-semibold shadow-lg hover:shadow-cyan-500/30 group/btn relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span className="group-hover/btn:scale-110 transition-transform duration-300">🛸</span>
            <span>Editar</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover/btn:from-cyan-400/20 group-hover/btn:to-blue-400/20 transition-all duration-500" />
        </button>
        
        <button 
          onClick={() => onEliminar(carta.id)}
          className="flex-1 bg-gradient-to-r from-red-600/90 to-pink-600/90 hover:from-red-500 hover:to-pink-500 text-white py-3 rounded-xl transition-all duration-500 hover:scale-105 border border-red-400/40 font-semibold shadow-lg hover:shadow-red-500/30 group/btn relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span className="group-hover/btn:scale-110 transition-transform duration-300">☄️</span>
            <span>Eliminar</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 to-pink-400/0 group-hover/btn:from-red-400/20 group-hover/btn:to-pink-400/20 transition-all duration-500" />
        </button>
      </div>
      
      {/* Efecto de partículas flotantes */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000" />
      <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000" />
    </div>
  );
}

export default Carta;