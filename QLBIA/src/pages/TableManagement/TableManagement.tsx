import React, { useEffect, useState } from "react";
import api from "../../services/api"; // Giả định rằng bạn đã cấu hình api đúng cách
import "./TableManagement.css"; // Tạo file CSS để định dạng trang

interface Booking {
  _id: string;
  table: {
    number: number;
    status: string;
  };
  user: {
    name: string; // Giả định bạn có trường name trong user
  };
  startTime: string;
  endTime: string;
  price: number;
}

const TableManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get("/bookings"); // Lấy danh sách đặt bàn từ backend
        setBookings(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách đặt bàn:", error);
        setError("Có lỗi xảy ra khi lấy danh sách đặt bàn");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const renderBookings = () => {
    return bookings.length > 0 ? (
      bookings.map((booking) => (
        <tr key={booking._id}>
          <td>{booking.table.number}</td>
          <td>{booking.table.status}</td>
          <td>{booking.user.name}</td>
          <td>{new Date(booking.startTime).toLocaleString()}</td>
          <td>{new Date(booking.endTime).toLocaleString()}</td>
          <td>{booking.price.toLocaleString()} VND</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={6}>Không có thông tin đặt bàn.</td>
      </tr>
    );
  };

  return (
    <div className="table-management">
      <h1>Quản lý bàn</h1>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div>
          {error && <p className="error">{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Bàn số</th>
                <th>Trạng thái</th>
                <th>Người dùng</th>
                <th>Thời gian bắt đầu</th>
                <th>Thời gian kết thúc</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>{renderBookings()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableManagement;
