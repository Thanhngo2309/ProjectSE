import express from 'express';
import { getAllTables, addTable, updateTableStatus, deleteTable } from '../controllers/tableController.js';

const router = express.Router();

// Route để lấy tất cả các bàn
router.get('/', getAllTables);

// Route để thêm bàn mới
router.post('/', addTable);

// Route để cập nhật trạng thái bàn
router.put('/:id', updateTableStatus);

// Route để xóa bàn
router.delete('/:id', deleteTable);

// Xuất khẩu router
export default router;
