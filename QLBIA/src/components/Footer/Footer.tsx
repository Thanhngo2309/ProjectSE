import facebook_icon from "../../assets/icons8-facebook-48.png";
import twiter_icon from "../../assets/icons8-twitter-48.png";
import linkedin_icon from "../../assets/icons8-linkedin-48.png";
import logo from "../../assets/icons8-pool-8-ball-96.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut
            laboriosam ratione incidunt tenetur magnam, voluptates optio facilis
            et quod laudantium amet sed earum veritatis blanditiis consectetur
            repellat dolor ea?
          </p>
          <div className="footer-social-icons">
            <img src={facebook_icon} alt="" />
            <img src={twiter_icon} alt="" />
            <img src={linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Booking</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@bia.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2004 &#169; Bia.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
