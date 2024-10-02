import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js'; // Đảm bảo db.js xuất ra connectDB
import authRoutes from './routes/authRoutes.js';
import tableRoutes from './routes/tableRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000; // Cấu hình cổng qua biến môi trường

// Middleware
app.use(cors());
app.use(express.json()); // Để phân tích cú pháp các body yêu cầu JSON

// Kết nối cơ sở dữ liệu
connectDB();

// Các API Routes
app.use('/tables', tableRoutes);
app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);

// Route gốc
app.get('/', (req, res) => {
    res.send('API Working');
});

// Bắt đầu server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Dòng debug cho JWT_SECRET
console.log('JWT_SECRET:', process.env.JWT_SECRET); // Dòng debug
