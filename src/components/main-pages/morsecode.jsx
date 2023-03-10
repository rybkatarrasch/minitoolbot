import "./mainpages-css/morsecode.css";
import { useState } from "react";
import morse from "../../images/morse-code.png";
import {
  morseCodeToText,
  textToMorseCode,
} from "./../../PerfFunctions/morseCode";
import { Link } from "react-router-dom";
import SideMenus from "../side-menus";

export default function MorseCodeConvert() {
  const [res, setres] = useState();
  const [inputType, setinputType] = useState("text");
  const [outputType, setoutputType] = useState("morse");
  const setinput = (e) => {
    setinputType(e.target.value);
    if (e.target.value === "text") setoutputType("morse");
    else setoutputType("text");
  };
  const setoutput = (e) => {
    setoutputType(e.target.value);
    if (e.target.value === "text") setinputType("morse");
    else setinputType("text");
  };
  const object = [
    { name: `text to morse`, func: textToMorseCode },
    { name: `morse to text`, func: morseCodeToText },
  ];
  const textToMorse = (e) => {
    const content = e.target.value;
    object.forEach((e) => {
      if (`${inputType} to ${outputType}` === e.name)
        return setres(e.func(content));
    });
  };
  const reverse = () => {};
  return (
    <div className="content-container">
      <div>
        <div id="morse-main">
          <div>
            <h3>Morse Code Converter</h3>
            <label htmlFor="morse-input">Input</label>
            <textarea
              name="morse-input"
              id="morse-input"
              cols="30"
              rows="10"
              onChange={textToMorse}
            ></textarea>
          </div>
          <div>
            <div>
              <img src={morse} alt="convert" onClick={reverse} />
            </div>
            <div>
              <label htmlFor="morse-convert">convert</label>
              <select
                value={inputType}
                name="morse-convert"
                id="morse-convert"
                onChange={setinput}
              >
                <option value="text">text</option>
                <option value="morse">morse code</option>
              </select>
              <label htmlFor="morse-convert">to</label>
              <select
                value={outputType}
                name="morse-convert"
                id="morse-convert"
                onChange={setoutput}
              >
                <option value="morse">morse code</option>
                <option value="text">text</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="morse-output">Output</label>
            <textarea
              value={res}
              readOnly
              name="morse-output"
              id="morse-output"
              cols="30"
              rows="10"
            ></textarea>
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
  );
}
