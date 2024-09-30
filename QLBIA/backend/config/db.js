// import mongoose from "mongoose";


// export const connectDB = async() => {
//     await mongoose.connect('mongodb+srv://kamenriderlc:23092004@cluster0.xbyos.mongodb.net/bia-man').then(()=>console.log("DB Connected"));
// }
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Tải biến môi trường từ file .env

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Lấy chuỗi kết nối từ biến môi trường
        if (!uri) {
            throw new Error('MongoDB URI is undefined');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB connection failed', err);
        process.exit(1); // Dừng chương trình nếu không kết nối được
    }
};

export { connectDB };

