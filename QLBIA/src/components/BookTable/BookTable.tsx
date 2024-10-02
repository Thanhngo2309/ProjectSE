import React, { useState } from "react";
import api from "../../services/api";

const BookTable: React.FC = () => {
  const [tableId, setTableId] = useState("");
  const [hourlyRate, setHourlyRate] = useState(100000); // Giá thuê mặc định

  const handleBookTable = async () => {
    try {
      const response = await api.post("/tables/book", {
        userId: "user_id", // Đặt userId của người dùng đang đăng nhập
        tableId,
        hourlyRate,
      });
      alert("Thuê bàn thành công!");
    } catch (error) {
      console.error("Lỗi khi thuê bàn:", error);
      alert("Thuê bàn thất bại!");
    }
  };

  return (
    <div>
      <h2>Thuê Bàn</h2>
      <input
        type="text"
        placeholder="Nhập ID bàn"
        value={tableId}
        onChange={(e) => setTableId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá thuê mỗi giờ"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(Number(e.target.value))}
      />
      <button onClick={handleBookTable}>Thuê bàn</button>
    </div>
  );
};

export default BookTable;
