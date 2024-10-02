import express from 'express';
import { register, login } from '../controllers/authController.js'; // Đảm bảo rằng bạn nhập khẩu đúng

const router = express.Router();

// Các route cho đăng ký và đăng nhập
router.post('/register', register);
router.post('/login', login);

export default router;
