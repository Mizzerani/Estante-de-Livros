import React, { useState, useEffect } from 'react';
import Shelf from '../components/Shelf';
import { fetchBooks } from '../services/api';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(response => setBooks(response.data));
  }, []);

  const shelves = {
    currentlyReading: "Estou lendo",
    wantToRead: "Quero ler",
    read: "Já lido",
  };

  return (
    <div>
      <h1>Estante de Livros</h1>
      {Object.entries(shelves).map(([shelf, title]) => (
        <Shelf
          key={shelf}
          title={title}
          books={books.filter(book => book.shelf === shelf)}
        />
      ))}
    </div>
  );
};

export default Home;
