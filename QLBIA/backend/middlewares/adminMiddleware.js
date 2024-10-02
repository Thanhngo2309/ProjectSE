// adminMiddleware.js
const adminMiddleware = (req, res, next) => {
    const userRole = req.user.role; // Lấy vai trò người dùng từ req.user
  
    if (userRole !== 'admin') {
      return res.status(403).json({ error: "Access denied" }); // Trả về lỗi nếu không phải là admin
    }
  
    next(); // Tiếp tục nếu là admin
  };
  
  export default adminMiddleware;
  