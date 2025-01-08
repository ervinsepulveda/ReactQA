import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/mockBooks';
import { useCart } from '../context/CartContext';
import '../styles/BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const book = books.find((b) => b.id === parseInt(id));

    return (
        <div className="book-details">
            <h1>{book.title}</h1>
            <p>Autor: {book.author}</p>
            <button
                onClick={() => {
                    console.log('Libro añadido al carrito:', book); // Verificar el libro
                    addToCart(book);
                }}
            >
                Añadir al Carrito
            </button>
        </div>
    );
};

export default BookDetails;
