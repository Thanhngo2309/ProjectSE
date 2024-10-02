import express from "express";
import {
  getTables,
  addTable,
  updateTable,
  deleteTable,
  bookTable,
  checkoutTable,
} from "../controllers/tableController.js"; // Nhập khẩu đúng cách
import authMiddleware from "../middlewares/authMiddleware.js"; 
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Routes cho admin
router.use(authMiddleware); // Xác thực cho tất cả các route bên dưới
router.get("/", getTables); // Lấy danh sách bàn

router.post("/", adminMiddleware, addTable); // Thêm bàn (admin)
router.put("/:id", adminMiddleware, updateTable); // Cập nhật bàn (admin)
router.delete("/:id", adminMiddleware, deleteTable); // Xóa bàn (admin)

router.post("/book", bookTable); // Đặt bàn (người dùng)
router.post("/checkout", adminMiddleware, checkoutTable); // Tính tiền (admin)

export default router;
