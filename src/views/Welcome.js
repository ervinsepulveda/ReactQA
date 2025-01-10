import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css'; // Importa el archivo de estilos

const Welcome = () => {
    const navigate = useNavigate();

    // Redirige a la página principal después de 5 segundos.
    useEffect(() => {
        const timer = setTimeout(() => navigate('/main'), 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="welcome-container">
            <h1>Bienvenidos a su Biblioteca</h1>
            <h2>Relatos de Papel</h2>
            <p>Redirección automáticamente en 5 segundos</p>
            <button onClick={() => navigate('/main')}>Entrar</button>
        </div>
    );
};

export default Welcome;
