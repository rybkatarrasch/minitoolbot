export function noConvert(text) {
  return text;
}

export function textToMorseCode(text) {
  const pattern = /^[a-zA-Z0-9 ]+$/; // allow only letters, digits, and spaces
  if (!pattern.test(text)) {
    return "Special characters are not allowed.";
  }
  const morseCodeMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": " ",
  };

  let morseCode = "";
  for (let i = 0; i < text.length; i++) {
    const character = text[i].toLowerCase();
    const morseCodeCharacter = morseCodeMap[character];
    if (morseCodeCharacter !== undefined) {
      morseCode += morseCodeCharacter + " ";
    }
  }
  return morseCode;
}

export function morseCodeToText(morseCode) {
  const morseCodeMap = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    " ": " ",
  };

  let text = "";
  const morseCodeWords = morseCode.trim().split(" ");
  for (let i = 0; i < morseCodeWords.length; i++) {
    const morseCodeCharacters = morseCodeWords[i].split(" ");
    for (let j = 0; j < morseCodeCharacters.length; j++) {
      const character = morseCodeMap[morseCodeCharacters[j]];
      if (character !== undefined) {
        text += character;
      }
    }
    if (i < morseCodeWords.length - 1) {
      text += " ";
    }
  }
  text = text.split("");
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      text.splice(i, 1);
    }
  }
  return text.join("");
}
