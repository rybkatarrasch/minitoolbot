import { coding1, binary1, luggage1, tape1 } from "../images/imports.js";
import { Link } from "react-router-dom";
import "./side-munes.css";

export default function SideMenus() {
  const allMenus = [
    { img: coding1, to: "/morse-code", label: "morse code converter" },
    { img: binary1, to: "/ascii", label: "ASCII converter" },
    { img: luggage1, to: "/weight", label: "weight converter" },
    { img: tape1, to: "/length", label: "length converter" },
  ];

  return (
    <>
      <h4>you may like </h4>
      {allMenus.map((e) => {
        return (
          <div className="menu-link" key={e.to}>
            <Link to={e.to}>
              <img src={e.img} />
              {e.label}
            </Link>
          </div>
        );
      })}
    </>
  );
}
