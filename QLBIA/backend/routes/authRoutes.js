import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route đăng ký
router.post('/register', registerUser);

// Route đăng nhập
router.post('/login', loginUser);

// Xuất khẩu router
export default router; // Đảm bảo có export default
