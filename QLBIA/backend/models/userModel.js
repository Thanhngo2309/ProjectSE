// models/userModel.js
import mongoose from 'mongoose';

// Định nghĩa schema cho người dùng
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Thêm các trường khác nếu cần
}, {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
});

// Xuất khẩu mô hình User
const User = mongoose.model('User', userSchema);
export default User; // Đảm bảo có export default
