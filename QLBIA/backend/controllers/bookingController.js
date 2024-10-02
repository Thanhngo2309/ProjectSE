// bookingController.js
import Booking from '../models/bookingModel.js'; // Sử dụng .js ở cuối đường dẫn
import Table from '../models/tableModel.js'; // Sử dụng .js ở cuối đường dẫn

// Đặt bàn
export const bookTable = async (req, res) => { // Sử dụng export const
    const { tableId, startTime, endTime } = req.body;

    // Kiểm tra xem tất cả thông tin cần thiết đã được cung cấp
    if (!tableId || !startTime || !endTime) {
        return res.status(400).json({ message: 'Vui lòng cung cấp đủ thông tin' });
    }

    try {
        const table = await Table.findById(tableId);
        if (!table || table.status !== 'Còn trống') {
            return res.status(400).json({ message: 'Bàn không có sẵn' });
        }

        const price = calculatePrice(startTime, endTime); // Tính tiền dựa trên thời gian chơi

        const booking = await Booking.create({
            user: req.user.id, // Lấy ID người dùng từ middleware
            table: tableId,
            startTime,
            endTime,
            price,
        });

        // Cập nhật trạng thái bàn
        table.status = 'Đã đặt';
        await table.save();

        res.status(201).json(booking);
    } catch (error) {
        console.error(error); // Ghi lại lỗi
        res.status(500).json({ message: 'Có lỗi xảy ra khi đặt bàn', error: error.message });
    }
};

// Tính tiền dựa trên thời gian chơi (giá tiền có thể tùy chỉnh)
const calculatePrice = (startTime, endTime) => {
    const duration = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60); // Tính giờ
    const pricePerHour = 100000; // Giá tiền mỗi giờ
    return duration * pricePerHour;
};
