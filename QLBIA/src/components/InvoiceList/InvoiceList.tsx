import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface Invoice {
  _id: string;
  user: string;
  table: string;
  amount: number;
  date: Date;
}

const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await api.get("/invoices");
      setInvoices(response.data);
    };
    fetchInvoices();
  }, []);

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            User: {invoice.user}, Table: {invoice.table}, Amount:{" "}
            {invoice.amount}, Date: {new Date(invoice.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
