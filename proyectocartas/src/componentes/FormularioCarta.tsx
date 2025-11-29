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
        <div className="formulario-carta">
            <h2>{cartaExistente ? 'Editar Carta' : 'Nueva Carta'}</h2>

            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div>
                <label>Imagen (URL):</label>
                <input
                    type="text"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                />
            </div>

            <div>
                <label>Descripción:</label>
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>

            
            <div>
                <label>Tipo:</label>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Seleccionar tipo</option>
                    <option value="Dragón">Dragón</option>
                    <option value="Mago">Mago</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Musico">Músico</option>
                </select>
            </div>

           
            <div>
                <label>Rareza:</label>
                <select value={rareza} onChange={(e) => setRareza(e.target.value)}>
                    <option value="">Seleccionar rareza</option>
                    <option value="Común">Común</option>
                    <option value="Rara">Rara</option>
                    <option value="Épica">Épica</option>
                    <option value="Legendaria">Legendaria</option>
                </select>
            </div>

                  
            <div>
                <label>Ataque:</label>
                <input
                    type="number"
                    value={ataque}
                    onChange={(e) => setAtaque(Number(e.target.value))}
                />
            </div>

            
            <div>
                <label>Defensa:</label>
                <input
                    type="number"
                    value={defensa}
                    onChange={(e) => setDefensa(Number(e.target.value))}
                />
            </div>
                        
            <div className="botones">
                <button type="button" onClick={onCancelar}>
                    Cancelar
                </button>
                <button type="button" onClick={handleGuardar}>
                    Guardar
                </button>
            </div>
        </div>
        
    );
}

export default FormularioCarta;