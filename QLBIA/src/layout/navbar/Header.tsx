import "./Header.css";
import logo from "../../assets/logoheader.jpg";
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Billiards Logo" />
          <span>billiards</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>ENTERTAIN FRIENDS AND YOURSELF BY PLAYING REAL POOL</h1>
        </div>
      </section>
    </>
  );
}

export default Header;
