import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" }, // Vai trò người dùng
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Table" }], // Lưu bàn đã đặt
});

export default mongoose.model("User", userSchema);
