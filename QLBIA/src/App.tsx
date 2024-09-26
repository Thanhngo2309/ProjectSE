import HomeScreen from "./pages/Home/HomeScreen";
import "./index.css";
// import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
function App() {
  return (
    <>
      <div className="app">
        <NavBar />
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
