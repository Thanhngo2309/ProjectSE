// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000', // Đảm bảo URL này trỏ đến backend của bạn
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Nếu bạn sử dụng token JWT
    },
});

export default api;
