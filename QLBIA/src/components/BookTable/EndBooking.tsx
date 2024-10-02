import React, { useState } from "react";
import api from "../../services/api";

const EndBooking: React.FC = () => {
  const [bookingId, setBookingId] = useState("");

  const handleEndBooking = async () => {
    try {
      const response = await api.post("/tables/end", { bookingId });
      const { totalAmount } = response.data;
      alert(`Tổng số tiền phải trả là: ${totalAmount} VND`);
    } catch (error) {
      console.error("Lỗi khi kết thúc thuê bàn:", error);
      alert("Kết thúc thuê bàn thất bại!");
    }
  };

  return (
    <div>
      <h2>Kết Thúc Thuê Bàn</h2>
      <input
        type="text"
        placeholder="Nhập ID đặt bàn"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
      />
      <button onClick={handleEndBooking}>Kết thúc</button>
    </div>
  );
};

export default EndBooking;
