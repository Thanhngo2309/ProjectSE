import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Nhập useNavigate
import "./LoginPopup.css";
import cross_icon from "../../assets/icons8-cross-50.png"; // Bạn cần thêm hình ảnh này
import api from "../../services/api"; // Giả định rằng bạn đã cấu hình api đúng cách

interface LoginPopupProps {
  setShowLogin: (show: boolean) => void;
}

const LoginPopup = ({ setShowLogin }: LoginPopupProps) => {
  const [currState, setCurrState] = useState("Sign up");
  const [email, setEmail] = useState(""); // Thêm state cho email
  const [password, setPassword] = useState(""); // Thêm state cho password
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Xử lý đăng nhập hoặc đăng ký
    try {
      const response = await api.post(
        currState === "Login" ? "/auth/login" : "/auth/register",
        {
          email,
          password,
        }
      );

      // Nếu đăng nhập thành công
      if (response.status === 200) {
        // Lưu token hoặc thông tin người dùng nếu cần
        localStorage.setItem("userToken", response.data.token); // Lưu token vào localStorage
        setShowLogin(false); // Đóng popup
        navigate("/bookings"); // Chuyển hướng đến trang đặt bàn
      }
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Thay đổi state khi nhập email
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Thay đổi state khi nhập password
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
