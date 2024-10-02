// controllers/authController.js
import User from '../models/userModel.js'; // Đảm bảo đường dẫn đúng

// Hàm đăng ký người dùng
export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = await User.create({ username, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Lỗi khi đăng ký người dùng', error });
    }
};

// Hàm đăng nhập người dùng
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }

        // Tạo JWT token ở đây nếu cần
        res.status(200).json({ message: 'Đăng nhập thành công', user });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi hệ thống', error });
    }
};
