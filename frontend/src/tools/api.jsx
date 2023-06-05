import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pi-ii-production.up.railway.app',
});

export default api;