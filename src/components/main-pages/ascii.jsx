import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  binaryToBinary,
  binaryToDecimal,
  binaryToHex,
  binaryToOctal,
  binaryToText,
  decimalToBinary,
  decimalToDecimal,
  decimalToHex,
  decimalToOctal,
  decimalToText,
  hexToBinary,
  hexToDecimal,
  hexToHex,
  hexToOctal,
  hexToText,
  octalToBinary,
  octalToDecimal,
  octalToHex,
  octalToOctal,
  octalToText,
  textToBinary,
  textToDecimal,
  textToHex,
  textToOctal,
  textToText,
} from "../../PerfFunctions/converterfunction";
import "./mainpages-css/ascii.css";
import SideMenus from "./../side-menus";

let selectedFrom = "text";
let selectedTo = "binary";
let selectedAction = `${selectedFrom} to ${selectedTo}`;

const objects = [
  { name: "text to text", func: textToText },
  { name: "text to binary", func: textToBinary },
  { name: "text to decimal", func: textToDecimal },
  { name: "text to hexadecimal", func: textToHex },
  { name: "text to octal", func: textToOctal },
  { name: "binary to binary", func: binaryToBinary },
  { name: "binary to decimal", func: binaryToDecimal },
  { name: "binary to hexadecimal", func: binaryToHex },
  { name: "binary to text", func: binaryToText },
  { name: "binary to octal", func: binaryToOctal },
  { name: "decimal to text", func: decimalToText },
  { name: "decimal to binary", func: decimalToBinary },
  { name: "decimal to hexadecimal", func: decimalToHex },
  { name: "decimal to decimal", func: decimalToDecimal },
  { name: "decimal to octal", func: decimalToOctal },
  { name: "hexadecimal to binary", func: hexToBinary },
  { name: "hexadecimal to text", func: hexToText },
  { name: "hexadecimal to decimal", func: hexToDecimal },
  { name: "hexadecimal to octal", func: hexToOctal },
  { name: "hexadecimal to hexadecimal", func: hexToHex },
  { name: "octal to binary", func: octalToBinary },
  { name: "octal to decimal", func: octalToDecimal },
  { name: "octal to hexadecimal", func: octalToHex },
  { name: "octal to text", func: octalToText },
  { name: "octal to octal", func: octalToOctal },
];
export default function Ascii() {
  let outputValue = "";
  const allActions = ["text", "binary", "decimal", "hexadecimal", "octal"];

  const [value, setvalue] = useState(outputValue);

  const getinput = (e) => {
    const toConvert = e.target.value;

    let actionTo;

    objects.forEach((e) => {
      if (e.name === selectedAction) actionTo = e.func;
    });
    const res = actionTo(toConvert);
    outputValue = res;
    setvalue(outputValue);
  };

  const [fromAction, setFromAction] = useState("text");
  const [toAction, setToAction] = useState("text");

  const navigate = useNavigate();

  function handleFromActionChange(event) {
    setFromAction(event.target.value);
    // update URL here
    //navigate(`/convert/${event.target.value}-to-${toAction}`);
    selectedFrom = event.target.value;
    selectedAction = `${selectedFrom} to ${selectedTo}`;
  }

  function handleToActionChange(event) {
    setToAction(event.target.value);
    // update URL here
    //navigate(`/convert/${fromAction}-to-${event.target.value}`);
    selectedTo = event.target.value;
    selectedAction = `${selectedFrom} to ${selectedTo}`;
  }
  return (
    <>
      <div className="content-container">
        <div>
          <div id="main-container">
            <div className="main-area">
              <h3>ASCII Converter</h3>
              <div className="sub-main">
                <label htmlFor="input-area">input</label>
                <textarea
                  onChange={getinput}
                  name="input-area"
                  id="input-area"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="convert-actions">
                <div>
                  <label htmlFor="">convert</label>
                  <select
                    onChange={handleFromActionChange}
                    value={selectedFrom}
                  >
                    {allActions.map((e) => (
                      <option key={e}>{e}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="">to</label>
                  <select onChange={handleToActionChange} value={selectedTo}>
                    {allActions.map((e) => (
                      <option key={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sub-main">
                <label htmlFor="output-area">output</label>
                <textarea
                  value={value}
                  readOnly
                  name="output-area"
                  id="output-area"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-ads">
          <div>sample ads</div>
          <div>
            <SideMenus />
          </div>
        </div>
      </div>
    </>
  );
}
