function Header({ onNuevaCarta }: { onNuevaCarta: () => void }) {
  return (
    <header>
      <h1>Gestor de Cartas</h1>
      <button onClick={onNuevaCarta}>
        Nueva Carta
      </button>
    </header>
  );
}

export default Header;