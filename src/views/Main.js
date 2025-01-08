import React, { useState } from 'react';
import books from '../data/mockBooks';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css'; // Importa el CSS  

const Main = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); // Declara navigate usando useNavigate

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="main-container">
            <div className="header-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar libros..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="book-list">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="book-item">
                        <img
                            src={book.image} // Usa la propiedad image
                            alt={`Portada de ${book.title}`}
                            className="book-image"
                        />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <button onClick={() => navigate(`/book/${book.id}`)}>
                            Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;