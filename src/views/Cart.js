import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useCart } from '../context/CartContext'; // Hook para manejar el carrito
import '../styles/Cart.css'; // Ruta correcta al archivo de estilos

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Obtén los datos del carrito y la función para eliminar elementos
    const navigate = useNavigate(); // Inicializa navigate para redirigir

    //console.log('Cart.js se está ejecutando'); // Confirmar que el componente se está montando
    //console.log('Contenido del carrito desde Cart.js:', cart); // Confirmar el estado del carrito

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>No hay elementos en el carrito.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.author}
                                <button onClick={() => removeFromCart(item.id)}>
                                    Eliminar
                                </button>

                            </li>
                        ))}
                    </ul>
                    <button
                        className="checkout-button"
                        onClick={() => navigate('/checkout')}
                    >
                        Finalizar Compra
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
