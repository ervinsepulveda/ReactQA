import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Hook para manejar el carrito
import { useNavigate } from 'react-router-dom'; // Hook para redirigir
import '../styles/Checkout.css'; // Ruta correcta al archivo de estilos

const Checkout = () => {
    const { cart, clearCart } = useCart(); // Obtén el carrito y la función para limpiarlo
    const navigate = useNavigate(); // Inicializa navigate para redirigir

    // Redirige al usuario si el carrito está vacío
    useEffect(() => {
        if (cart.length === 0) {
            alert('El carrito está vacío. Redirigiendo a la página principal...');
            navigate('/main');
        }
    }, [cart, navigate]);

    // Maneja la confirmación del pedido
    const handleCheckout = () => {
        alert('¡Pedido realizado con éxito!');
        clearCart();
        navigate('/main');
    };

    const handleBack = () => {
        navigate('/main');
    };

    return (
        <div className="checkout-container">
            <h2>Resumen de tu Compra</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <strong>{item.title}</strong> - {item.author}
                    </li>
                ))}
            </ul>
            <button className="confirm-button" onClick={handleCheckout}>
                Confirmar Pedido
            </button>
            <button className="back-button" onClick={handleBack}>
                Regresar a la página principal
            </button>
        </div>
    );
};

export default Checkout;
