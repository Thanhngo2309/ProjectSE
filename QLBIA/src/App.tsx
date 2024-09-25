import HomeScreen from "./pages/Home/HomeScreen";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
