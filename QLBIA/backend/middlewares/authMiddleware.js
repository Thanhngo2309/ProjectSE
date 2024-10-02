// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

// Middleware để bảo vệ các route
export const protect = (req, res, next) => {
    let token;

    // Lấy token từ header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]; // Lấy token
    }

    if (!token) {
        return res.status(401).json({ message: 'Không có token, truy cập bị từ chối' });
    }

    try {
        // Giải mã token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Gán thông tin người dùng vào request
        next(); // Tiếp tục với middleware hoặc route tiếp theo
    } catch (error) {
        return res.status(401).json({ message: 'Token không hợp lệ', error });
    }
};
