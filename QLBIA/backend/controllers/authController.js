import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Đăng ký người dùng
const register = async (req, res) => {
  const { username, email, password, isAdmin } = req.body; // Thêm trường isAdmin

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: isAdmin ? 'admin' : 'user', // Gán vai trò dựa trên isAdmin
    });

    await newUser.save();

    // Trả về thông tin người dùng bao gồm role
    res.status(201).json({ 
      message: "User registered successfully.", 
      role: newUser.role // Trả về vai trò của người dùng
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists." });
    }
    res.status(500).json({ error: error.message });
  }
};

// Đăng nhập người dùng
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
    // Trả về thông tin người dùng bao gồm role
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xuất khẩu từng hàm một
export { register, login };
