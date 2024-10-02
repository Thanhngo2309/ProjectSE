// bookingRoutes.js
import express from 'express';
import { bookTable } from '../controllers/bookingController.js'; // Sử dụng .js ở cuối đường dẫn
import { protect } from '../middlewares/authMiddleware.js'; // Sử dụng .js ở cuối đường dẫn

const router = express.Router();

router.post('/', protect, bookTable);

export default router; // Xuất khẩu router
