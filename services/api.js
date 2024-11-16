import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-books-dot-api-samples-423102.uc.r.appspot.com',
});

export const fetchBooks = () => api.get('/books');
export const updateBook = (id, shelf) => api.put(`/books/${id}`, { shelf });

export default api;
