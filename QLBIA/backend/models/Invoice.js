import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;
