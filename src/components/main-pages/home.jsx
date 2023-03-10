import { Link } from "react-router-dom";
import "./mainpages-css/home.css";
import {
  coding,
  coding1,
  binary,
  binary1,
  luggage,
  luggage1,
  tape,
  tape1,
} from "../../images/imports.js";

import { useState } from "react";

export default function Home() {
  const [morseIcon, setmorseIcon] = useState(coding1);
  const [binaryIcon, setbinaryIcon] = useState(binary1);
  const [weigthIcon, setweigthIcon] = useState(luggage1);
  const [tapeIcon, settapeIcon] = useState(tape1);
  return (
    <div id="home-page">
      <div
        className="home-element"
        id="morse-code"
        onMouseEnter={() => setmorseIcon(coding)}
        onMouseLeave={() => setmorseIcon(coding1)}
      >
        <Link to="/morse-code">
          <img src={morseIcon} alt="icon" /> morse code converter
        </Link>
      </div>
      <div
        className="home-element"
        id="ascii-code"
        onMouseEnter={() => setbinaryIcon(binary)}
        onMouseLeave={() => setbinaryIcon(binary1)}
      >
        <Link to="/ascii">
          <img src={binaryIcon} alt="icon" /> ASCII converter
        </Link>
      </div>
      <div
        className="home-element"
        id="weigth-code"
        onMouseEnter={() => setweigthIcon(luggage)}
        onMouseLeave={() => setweigthIcon(luggage1)}
      >
        <Link to="/weight">
          <img src={weigthIcon} alt="icon" />
          Weigth converter
        </Link>
      </div>
      <div
        className="home-element"
        id="length-code"
        onMouseEnter={() => settapeIcon(tape)}
        onMouseLeave={() => settapeIcon(tape1)}
      >
        <Link to="/length">
          <img src={tapeIcon} alt="icon" />
          Length converter
        </Link>
      </div>
    </div>
  );
}
