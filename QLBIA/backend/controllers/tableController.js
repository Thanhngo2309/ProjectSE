// controllers/tableController.js
import Table from '../models/tableModel.js'; // Đảm bảo đường dẫn đúng

// Lấy tất cả các bàn
export const getAllTables = async (req, res) => {
    try {
        const tables = await Table.find({});
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách bàn', error });
    }
};

// Thêm bàn mới
export const addTable = async (req, res) => {
    const { name, status } = req.body; // Giả sử bạn có các trường name và status

    try {
        const newTable = await Table.create({ name, status });
        res.status(201).json(newTable);
    } catch (error) {
        res.status(400).json({ message: 'Lỗi khi thêm bàn', error });
    }
};

// Cập nhật trạng thái bàn
export const updateTableStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const table = await Table.findByIdAndUpdate(id, { status }, { new: true });
        if (!table) {
            return res.status(404).json({ message: 'Bàn không tồn tại' });
        }
        res.status(200).json(table);
    } catch (error) {
        res.status(400).json({ message: 'Lỗi khi cập nhật trạng thái bàn', error });
    }
};

// Xóa bàn
export const deleteTable = async (req, res) => {
    const { id } = req.params;

    try {
        const table = await Table.findByIdAndDelete(id);
        if (!table) {
            return res.status(404).json({ message: 'Bàn không tồn tại' });
        }
        res.status(204).json(); // Trả về 204 No Content
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa bàn', error });
    }
};
