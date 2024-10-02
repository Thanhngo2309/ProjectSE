import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./UserManagement.css";

interface User {
  _id: string;
  username: string;
  role: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get("/users");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Username: {user.username}, Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
