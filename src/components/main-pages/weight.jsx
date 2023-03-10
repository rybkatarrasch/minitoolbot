import "./mainpages-css/weight.css";
import { useState } from "react";
import SideMenus from "./../side-menus";

export default function WeightConverter() {
  const [gr, setgr] = useState("");
  const [kg, setkg] = useState("");
  const [lb, setlb] = useState("");
  const [oz, setoz] = useState("");
  const [st, setst] = useState("");
  const [tt, settt] = useState("");
  const [ct, setct] = useState("");
  const [ozt, setozt] = useState("");
  const [amu, setamu] = useState("");
  const [mP, setmP] = useState("");

  const units = [
    { name: "grams", label: "Gram (g)", value: 1, set: gr, setter: setgr },
    {
      name: "kilograms",
      label: "Kilogram (kg)",
      value: 1000,
      set: kg,
      setter: setkg,
    },
    {
      name: "pounds",
      label: "Pound (lb)",
      value: 453.592,
      set: lb,
      setter: setlb,
    },
    {
      name: "ounces",
      label: "Ounce (oz)",
      value: 28.3495,
      set: oz,
      setter: setoz,
    },
    {
      name: "stone",
      label: "Stone (st)",
      value: 6350.29,
      set: st,
      setter: setst,
    },
    {
      name: "tonne",
      label: "Tonne (t)",
      value: 1000000,
      set: tt,
      setter: settt,
    },
    { name: "carat", label: "Carat (ct)", value: 0.2, set: ct, setter: setct },
    {
      name: "troyounce",
      label: "Troy ounce (ozt)",
      value: 31.1035,
      set: ozt,
      setter: setozt,
    },
    {
      name: "atomicmassunit",
      label: "Atomic mass unit (amu)",
      value: 1.66054e-24,
      set: amu,
      setter: setamu,
    },
    {
      name: "planckmass",
      label: "Planck mass (mP)",
      value: 2.17645e-5,
      set: mP,
      setter: setmP,
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
          <h3>Weigth Converter</h3>
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
