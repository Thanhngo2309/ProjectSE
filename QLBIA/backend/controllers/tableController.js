import Table from '../models/Table.js';

// Lấy danh sách bàn
export const getTables = async (req, res) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm bàn mới
export const addTable = async (req, res) => {
    const { number, status } = req.body;
    const newTable = new Table({ number, status });
    try {
        await newTable.save();
        res.status(201).json(newTable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa bàn
export const deleteTable = async (req, res) => {
    const { id } = req.params;
    try {
        await Table.findByIdAndDelete(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
