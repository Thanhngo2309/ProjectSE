import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./InvoiceList.css";

interface Invoice {
  _id: string;
  user: { username: string } | null; // Kiểm tra user có thể null
  table: { _id: string } | null; // Kiểm tra table có thể null
  amount: number;
  date: Date;
}

const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await api.get("/invoices");
        setInvoices(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className="invoice-list">
      <h2>Invoice Management</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            User: {invoice.user ? invoice.user.username : "N/A"},{" "}
            {/* Kiểm tra nếu user không null */}
            Table: {invoice.table ? invoice.table._id : "N/A"},{" "}
            {/* Kiểm tra nếu table không null */}
            Amount: {invoice.amount}, Date:{" "}
            {new Date(invoice.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
