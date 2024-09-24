import "./NavBar.css";
import logo from "../../assets/logoheader.jpg";
import search_icon from "../../assets/search_icon.png";
import { useState } from "react";
const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu == "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu == "menu" ? "active" : ""}
          >
            menu
          </li>
          <li
            onClick={() => setMenu("about-us")}
            className={menu == "about-us" ? "active" : ""}
          >
            About us
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu == "contact-us" ? "active" : ""}
          >
            contact us
          </li>
        </ul>
        <div className="navbar-right">
          <img src={search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src="basket_icon" alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
