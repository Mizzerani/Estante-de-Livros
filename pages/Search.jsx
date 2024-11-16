import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { fetchBooks } from '../services/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setQuery(query);
    fetchBooks().then(response => {
      const filteredBooks = response.data.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredBooks);
    });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {results.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Search;
