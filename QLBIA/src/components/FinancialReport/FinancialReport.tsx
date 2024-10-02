import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./FinancialReport.css";

const FinancialReport: React.FC = () => {
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);

  useEffect(() => {
    const fetchFinancialData = async () => {
      const response = await api.get("/invoices");
      const invoices = response.data;

      const totalRevenue = invoices.reduce(
        (sum: number, invoice: any) => sum + invoice.amount,
        0
      );
      setTotalRevenue(totalRevenue);
      setTotalTransactions(invoices.length);
    };

    fetchFinancialData();
  }, []);

  return (
    <div className="financial-report">
      <h2>Financial Report</h2>
      <p>Total Revenue: {totalRevenue} VND</p>
      <p>Total Transactions: {totalTransactions}</p>
    </div>
  );
};

export default FinancialReport;
