import HomeScreen from "./pages/Home/HomeScreen";
import "./index.css";
// import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";

import LoginPopup from "./components/LoginPopup/LoginPopup";
import React, { useState } from "react";
import TableList from "./components/TableList/TableList";
import { Route } from "react-router-dom";
import InvoiceList from "./components/InvoiceList/InvoiceList";

const App: React.FC = () => {
  const [showLogin, setShowLogin] = React.useState<boolean>(false);

  const [refreshTables, setRefreshTables] = useState(false);

  function handleTableAdded(): void {
    setRefreshTables(!refreshTables);
  }

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />

        <TableList />
        <InvoiceList />
        {/* <HomeScreen /> */}
        {/* <Routes>
          <Route path="/ProjectSE/" element={<HomeScreen />} />
          <Route path="/cart" element={<Cart />} />
        </Routes> */}
        {/* 
        <Route path="/tables" element={<TableList />} />
        <Route path="/invoices" element={<InvoiceList />} /> */}
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
