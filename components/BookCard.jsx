import React from 'react';

const BookCard = ({ book }) => {
  const handleShelfChange = (e) => {
    // Atualize o livro no backend aqui
  };

  return (
    <div className="book-card">
      <img src={book.imageLinks.thumbnail} alt={book.title} />
      <div>
        <h3>{book.title}</h3>
        <p>{book.authors.join(', ')}</p>
        <select value={book.shelf} onChange={handleShelfChange}>
          <option value="currentlyReading">Estou lendo</option>
          <option value="wantToRead">Quero ler</option>
          <option value="read">Já lido</option>
        </select>
      </div>
    </div>
  );
};

export default BookCard;
