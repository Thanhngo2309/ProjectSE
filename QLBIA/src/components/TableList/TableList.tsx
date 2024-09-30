import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface Table {
  _id: string;
  number: number;
  status: string;
}

const TableList: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [status, setStatus] = useState<string>("available");

  useEffect(() => {
    const fetchTables = async () => {
      const response = await api.get("/tables");
      setTables(response.data);
    };
    fetchTables();
  }, []);

  const handleAddTable = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newTable = { number, status };
      const response = await api.post("/tables", newTable);
      setTables((prev) => [...prev, response.data]);
      setNumber(0);
      setStatus("available");
    } catch (error) {
      alert("Failed to add table");
    }
  };

  const handleDeleteTable = async (id: string) => {
    try {
      await api.delete(`/tables/${id}`);
      setTables(tables.filter((table) => table._id !== id));
    } catch (error) {
      alert("Failed to delete table");
    }
  };

  return (
    <div>
      <h2>Table List</h2>
      <form onSubmit={handleAddTable}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Table Number"
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="available">Available</option>
          <option value="occupied">Occupied</option>
        </select>
        <button type="submit">Add Table</button>
      </form>
      <ul>
        {tables.map((table) => (
          <li key={table._id}>
            Table {table.number} - Status: {table.status}
            <button onClick={() => handleDeleteTable(table._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
