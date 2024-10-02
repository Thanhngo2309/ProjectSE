import HomeScreen from "./pages/Home/HomeScreen";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import TableManagement from "./pages/TableManagement/TableManagement"; // Import trang quản lý bàn
import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/bookings" element={<TableManagement />} />{" "}
          {/* Trang quản lý bàn */}
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
