import HomeScreen from "./pages/Home/HomeScreen";
import "./index.css";
import Header from "./layout/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import NavBar from "./layout/navbar/NavBar";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
