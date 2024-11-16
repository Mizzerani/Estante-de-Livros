import React from 'react';

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Buscar livros"
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
