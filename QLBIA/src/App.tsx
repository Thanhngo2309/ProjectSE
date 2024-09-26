import HomeScreen from "./pages/Home/HomeScreen";
import "./index.css";
// import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";

import LoginPopup from "./components/LoginPopup/LoginPopup";
import React from "react";
function App() {
  const [showLogin, setShowLogin] = React.useState<boolean>(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <HomeScreen />
        {/* <Routes>
          <Route path="/ProjectSE/" element={<HomeScreen />} />
          <Route path="/cart" element={<Cart />} />
        </Routes> */}
      </div>
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
