import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importa CartProvider
import Welcome from './views/Welcome';
import Main from './views/Main';
import BookDetails from './views/BookDetails';
import Cart from './components/Cart';
import Checkout from './views/Checkout';

const App = () => {
    const location = useLocation(); // Obtén la ubicación actual

    return (
        <>
            {/* Renderiza el carrito solo si no estás en la página Welcome */}
            {location.pathname !== '/' && <Cart />}
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/main" element={<Main />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    );
};

export default function AppWrapper() {
    return (
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    );
}
