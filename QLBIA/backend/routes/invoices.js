import express from 'express';
import { getInvoices, addInvoice } from '../controllers/invoiceController.js';

const router = express.Router();

router.get('/', getInvoices);
router.post('/', addInvoice);

export default router;
