import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useCart } from '../context/CartContext'; // Usa el contexto del carrito

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Usa el hook useCart para acceder al contexto
    const navigate = useNavigate(); // Inicializa useNavigate para redirigir

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>No hay elementos en el carrito.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.author}
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    {console.log('Renderizando botón de Finalizar Compra')}
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
