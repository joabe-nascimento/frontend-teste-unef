import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-teste-unef.onrender.com/api', // URL pública do backend no Render
});

export default api;


///ajuste das
