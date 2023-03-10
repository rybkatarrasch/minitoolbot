import "./navbar.css";
import logo from "../images/toolboticon1.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="home-navbar">
      <div>
        <div className="fav-logo sub">
          <img src={logo} alt="fav-icon" />
        </div>
        <div className="categories sub">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
