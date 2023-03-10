//import "./mainpages-css/legnth.css";
import { useState } from "react";
import SideMenus from "./../side-menus";

export default function LengthConverter() {
  const [mt, setmt] = useState("");
  const [kl, setkl] = useState("");
  const [cm, setcm] = useState("");
  const [mm, setmm] = useState("");
  const [ft, setft] = useState("");
  const [inc, setinc] = useState("");
  const [yrd, setyrd] = useState("");
  const [mil, setmil] = useState("");

  const unitsed = {
    meters: 1,
    kilometers: 1000,
    centimeters: 0.01,
    millimeters: 0.001,
    feet: 0.3048,
    inches: 0.0254,
    yards: 0.9144,
    miles: 1609.34,
  };

  const units = [
    { name: "meters", label: "Meter (m)", value: 1, set: mt, setter: setmt },
    {
      name: "kilometers",
      label: "Kilometer (km)",
      value: 1000,
      set: kl,
      setter: setkl,
    },
    {
      name: "centimeters",
      label: "Centimeter (cm)",
      value: 0.01,
      set: cm,
      setter: setcm,
    },
    {
      name: "millimeters",
      label: "Millimeter (mm)",
      value: 0.001,
      set: mm,
      setter: setmm,
    },
    {
      name: "feet",
      label: "Foot (ft)",
      value: 0.3048,
      set: ft,
      setter: setft,
    },
    {
      name: "inches",
      label: "Inch (in)",
      value: 0.0254,
      set: inc,
      setter: setinc,
    },
    {
      name: "yards",
      label: "Yard (yd)",
      value: 0.9144,
      set: yrd,
      setter: setyrd,
    },
    {
      name: "miles",
      label: "Mile (mi)",
      value: 1609.34,
      set: mil,
      setter: setmil,
    },
  ];
  function convertToScientificNotation(num) {
    const exponent = Math.floor(Math.log10(Math.abs(num)));
    const mantissa = (num / Math.pow(10, exponent)).toFixed(4);
    return `${mantissa}e${exponent}`;
  }
  function formatScientificNumber(num) {
    const [coefficient, exponent] = num.toExponential().split("e");
    return `${Number(coefficient).toFixed(2)}e${exponent}`;
  }

  const loopFunc = (name) => {
    let value;
    units.forEach((element) => {
      if (element.name === name) value = element.value;
    });
    return value;
  };

  const convert = (e) => {
    for (let i = 0; i < units.length; i++) {
      if (units[i].name == e.target.name) {
        units[i].setter(e.target.value);
        continue;
      }
      let value;
      if (e.target.value === "") value = "";
      else {
        value =
          (parseFloat(e.target.value) * loopFunc(e.target.name)) /
          units[i].value;
        if (value > 100000) {
          value = convertToScientificNotation(value);
        } else if (value < 0.0001) {
          value = formatScientificNumber(value);
        }
      }

      units[i].setter(value);
    }
  };
  return (
    <div className="content-container">
      <div>
        <div id="weight-converter">
          <h3>Length Converter</h3>
          {units.map((e) => {
            return (
              <div className="sub-input" key={e.name}>
                <input
                  type="string"
                  name={e.name}
                  id={e.name}
                  onChange={convert}
                  value={e.set}
                />
                <label htmlFor={e.name}>{e.label}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="menu-ads">
        <div>sample ads</div>
        <div>
          <SideMenus />
        </div>
      </div>
    </div>
  );
}
