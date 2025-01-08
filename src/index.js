import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la nueva API de ReactDOM
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext'; // Asegúrate de envolver con CartProvider si estás usando un contexto.

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
