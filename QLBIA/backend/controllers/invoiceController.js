import Invoice from '../models/Invoice.js';

// Lấy danh sách hóa đơn
export const getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate('user table');
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm hóa đơn mới
export const addInvoice = async (req, res) => {
    const { user, table, amount } = req.body;
    const newInvoice = new Invoice({ user, table, amount });
    try {
        await newInvoice.save();
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
