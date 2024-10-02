import Table from "../models/Table.js";
import User from "../models/User.js";

// Lấy danh sách bàn
const getTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Thêm bàn (Admin)
const addTable = async (req, res) => {
  const { tableNumber, pricePerHour } = req.body;

  const newTable = new Table({ tableNumber, pricePerHour });

  try {
    await newTable.save();
    res.status(201).json(newTable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật bàn (Admin)
const updateTable = async (req, res) => {
  const { id } = req.params;
  const { tableNumber, pricePerHour, isAvailable } = req.body;

  try {
    const updatedTable = await Table.findByIdAndUpdate(
      id,
      { tableNumber, pricePerHour, isAvailable },
      { new: true }
    );
    res.json(updatedTable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xóa bàn (Admin)
const deleteTable = async (req, res) => {
  const { id } = req.params;

  try {
    await Table.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Đặt bàn (Người dùng)
const bookTable = async (req, res) => {
  const { tableId } = req.body;
  const userId = req.user.id; // Lấy ID người dùng từ middleware

  try {
    const table = await Table.findById(tableId);

    if (!table.isAvailable) {
      return res.status(400).json({ error: "Table is not available" });
    }

    table.isAvailable = false; // Đánh dấu bàn đã đặt
    await table.save();

    const user = await User.findById(userId);
    user.bookings.push(tableId); // Thêm bàn vào danh sách đặt
    await user.save();

    res.json({ message: "Table booked successfully", table });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tính tiền (Admin)
const checkoutTable = async (req, res) => {
  const { tableId } = req.body;

  try {
    const table = await Table.findById(tableId);
    if (table) {
      table.isAvailable = true; // Đánh dấu bàn là có sẵn
      await table.save();
      res.json({ message: "Checkout successful", price: table.pricePerHour });
    } else {
      res.status(404).json({ error: "Table not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xuất khẩu từng hàm
export { 
  getTables, 
  addTable, 
  updateTable, 
  deleteTable, 
  bookTable, 
  checkoutTable 
};
