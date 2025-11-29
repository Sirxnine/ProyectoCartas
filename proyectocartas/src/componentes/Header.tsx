function Header({ onNuevaCarta }: { onNuevaCarta: () => void }) {
  return (
    <header className="bg-black/20 backdrop-blur-xl border-b border-cyan-400/20 py-6 relative overflow-hidden">
      {/* Efecto de fondo cósmico */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5" />
      
      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-3 group">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-500">🚀</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-purple-300 transition-all duration-500">
            Cosmic Cards
          </h1>
        </div>
        <button 
          onClick={onNuevaCarta}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 border border-cyan-400/30 relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span className="group-hover:scale-110 transition-transform duration-300">✨</span>
            <span>Nueva Carta Cósmica</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-500" />
        </button>
      </div>
    </header>
  );
}

export default Header;