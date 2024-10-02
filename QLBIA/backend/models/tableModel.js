import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['Còn trống', 'Đã đặt'],
        default: 'Còn trống',
    },
}, { timestamps: true });

export default mongoose.model('Table', tableSchema); // Xuất khẩu mặc định
