import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pi-ii-backend.vercel.app',
});

export default api;