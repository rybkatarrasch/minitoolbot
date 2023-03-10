export function textToText(text) {
  return text;
}

export function binaryToBinary(input) {
  if (!/^[01\s]+$/.test(input)) {
    return "Invalid input";
  }
  return input;
}

export function decimalToDecimal(input) {
  const decimalPattern = /^\d+(\.\d+)?$/;
  if (decimalPattern.test(input)) return "invalid input";
  return input;
}
export function hexToHex(input) {
  const hexPattern = /^[0-9a-fA-F]+$/;
  if (hexPattern.test(input)) return "invalid input";
  return input;
}
export function octalToOctal(input) {
  const octalPattern = /^[0-7]+$/;
  if (octalPattern.test(input)) return "invalid input";
  return input;
}

export function textToDecimal(text) {
  const decimalArray = [];

  // convert each character in the string to its corresponding decimal value
  for (let i = 0; i < text.length; i++) {
    const decimalValue = text.charCodeAt(i);
    decimalArray.push(decimalValue);
  }

  // return the resulting array of decimal values
  return decimalArray.join(" ");
}

export function textToBinary(text) {
  let binary = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i).toString(2);
    while (charCode.length < 8) {
      charCode = "0" + charCode; // add leading zeros if necessary
    }
    binary += `${charCode} `;
  }
  return binary;
}

export function binaryToText(binaryStr) {
  let string = "";
  let bin = binaryStr.split(" ");
  bin.forEach((e) => {
    if (!/^[01\s]+$/.test(e)) {
      return "Invalid input: input must be a binary string";
    }
    string += `${String.fromCharCode(parseInt(e, 2))}`;
  });
  return string;
}

export function decimalToBinary(decimal) {
  // Check if input is a valid number
  let error;
  let binary = "";
  let dec = decimal.split(" ");
  dec.forEach((e) => {
    if (isNaN(e) || e < 0 || e > 127) {
      return (error = "Error: Invalid input, please enter a number");
    }
    e = Number(e);

    binary += `${e.toString(2)} `;
  });

  // Check if input is within the range of valid numbers
  // if (decimal < Number.MIN_SAFE_INTEGER || decimal > Number.MAX_SAFE_INTEGER) {
  //   return "Error: Number is out of range";
  // }

  // // Check if input is a whole number
  // if (!Number.isInteger(decimal)) {
  //   return "Error: Input must be a whole number";
  // }

  // Convert decimal to binary
  if (error) return error;
  console.log(binary);
  return binary;
}

export function binaryToDecimal(binaryStr) {
  // Check if the input is a valid binary string
  let decimal = "";
  let input = binaryStr.split(" ");
  input.forEach((e) => {
    if (!/^[01]+$/.test(e)) {
      return "Invalid input: input must be a binary string";
    }
    decimal += `${parseInt(e, 2)} `;
  });
  return decimal;
}

export function binaryToHex(binaryStr) {
  // Check if the input is a valid binary string
  if (!/^[01]+$/.test(binaryStr)) {
    return "Invalid input: input must be a binary string";
  }

  // Pad the binary string with zeroes to ensure it has a multiple of 4 digits
  while (binaryStr.length % 4 !== 0) {
    binaryStr = "0" + binaryStr;
  }

  // Convert the binary string to a hexadecimal string
  let hex = "";
  for (let i = 0; i < binaryStr.length; i += 4) {
    const chunk = binaryStr.substring(i, i + 4);
    const decimal = parseInt(chunk, 2);
    const hexDigit = decimal.toString(16);
    hex += hexDigit;
  }

  return hex;
}

export function hexToBinary(hexStr) {
  // Check if the input is a valid hexadecimal string
  if (!/^[0-9a-fA-F]+$/.test(hexStr)) {
    return "Invalid input: input must be a hexadecimal string";
  }

  // Convert the hexadecimal string to a binary string
  let binary = "";
  for (let i = 0; i < hexStr.length; i++) {
    const hexDigit = hexStr.charAt(i);
    const decimal = parseInt(hexDigit, 16);
    const binaryChunk = decimal.toString(2).padStart(4, "0");
    binary += binaryChunk;
  }

  return binary;
}

export function decimalToHex(decimalNum) {
  // Check if the input is a valid decimal number
  const toConvert = parseInt(decimalNum);
  if (
    typeof toConvert !== "number" ||
    isNaN(toConvert) ||
    !Number.isInteger(toConvert) ||
    toConvert < 0 ||
    /^\d+$/.test(decimalNum) === false
  ) {
    return "Invalid input: input must be a non-negative integer";
  }

  // Convert the decimal number to a hexadecimal string
  const hexStr = toConvert.toString(16);

  return hexStr;
}

export function hexToDecimal(hexStr) {
  // Check if the input is a valid hexadecimal string
  if (!/^[0-9A-Fa-f]+$/.test(hexStr)) {
    return "Invalid input: input must be a hexadecimal string";
  }

  // Convert the hexadecimal string to a decimal number
  const decimalNum = parseInt(hexStr, 16);

  return decimalNum;
}

export function decimalToOctal(decimalNum) {
  // Check if the input is a valid decimal number
  let octalStr = "";
  let error;
  const dec = decimalNum.split(" ");
  dec.forEach((e) => {
    const toConvert = parseInt(e);
    if (
      typeof toConvert !== "number" ||
      isNaN(toConvert) ||
      !Number.isInteger(toConvert) ||
      !/^\d+$/.test(e) ||
      toConvert < 0
    ) {
      return (error = "Invalid input: input must be a non-negative integer");
    }

    // Convert the decimal number to an octal string
    let octal = toConvert.toString(8);
    while (octal.length < 3) octal = "0" + octal;
    octalStr += `${octal} `;
  });

  if (error) return error;
  return octalStr;
}

export function octalToDecimal(octalStr) {
  // Check if the input is a valid octal string
  if (!/^[0-7]+$/.test(octalStr)) {
    return "Invalid input: input must be an octal string";
  }

  // Convert the octal string to a decimal number
  const decimalNum = parseInt(octalStr, 8);

  return decimalNum;
}

export function binaryToOctal(binaryStr) {
  // Check if the input is a valid binary string
  if (!/^[01]+$/.test(binaryStr)) {
    return "Invalid input: input must be a binary string";
  }

  // Pad the binary string with zeros to ensure it has a length that is a multiple of 3
  const paddingLength = binaryStr.length % 3;
  if (paddingLength > 0) {
    binaryStr = "0".repeat(3 - paddingLength) + binaryStr;
  }

  // Convert the padded binary string to a list of 3-bit chunks
  const chunks = binaryStr.match(/.{1,3}/g);

  // Convert each 3-bit chunk to its corresponding octal digit
  const octalDigits = chunks.map((chunk) => parseInt(chunk, 2).toString(8));

  // Join the octal digits to form the final octal string
  const octalStr = octalDigits.join("");

  return octalStr;
}

export function octalToBinary(octalNum) {
  // Check if the input is a valid octal number
  const toConvert = parseInt(octalNum, 8);
  if (
    typeof toConvert !== "number" ||
    isNaN(toConvert) ||
    !Number.isInteger(toConvert) ||
    !/^[0-7]+$/.test(toConvert) ||
    toConvert < 0
  ) {
    return "Invalid input: input must be a non-negative octal number";
  }

  // Convert the octal number to a binary string
  const binaryStr = toConvert.toString(2);

  return binaryStr;
}

export function hexToOctal(hexNum) {
  // Check if the input is a valid hexadecimal number
  let error;
  let toConvert = hexNum.split(" ");
  let octalStr = "";
  toConvert.forEach((e) => {
    if (!/^[0-9A-Fa-f]+$/.test(e)) {
      return (error = "Invalid input: input must be a hexadecimal string");
    }

    // Convert the hexadecimal number to a decimal number
    const decimalNum = parseInt(e, 16);

    // Convert the decimal number to an octal string

    let octal = decimalNum.toString(8);
    while (octal.length < 3) octal = "0" + octal;
    octalStr += `${octal} `;
  });
  if (error) return error;
  return octalStr;
}

export function octalToHex(octalNum) {
  // Check if the input is a valid octal number
  let error;
  let hexStr = "";
  const toConvert = octalNum.split(" ");
  toConvert.forEach((e) => {
    if (!/^[0-7]+$/.test(e)) {
      return (error = "Invalid input: input must be an octal number");
    }
    const decimalNum = parseInt(e, 8);

    // Convert the decimal number to a hexadecimal string
    hexStr += `${decimalNum.toString(16)} `;
  });

  // Convert the octal number to a decimal number

  if (error) return error;
  return hexStr;
}

export function hexToText(hex) {
  // remove any spaces from the input string
  hex = hex.replace(/\s/g, "");

  // check for invalid input (odd number of characters or non-hexadecimal characters)
  if (hex.length % 2 !== 0 || /[^0-9a-fA-F]/.test(hex)) {
    return "invalid input! must not contain (odd number of characters or non-hexadecimal characters)";
  }

  // convert the hexadecimal string to a byte array
  const bytes = [];
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16));
  }

  // decode the byte array using UTF-8 encoding
  const text = new TextDecoder("utf-8").decode(new Uint8Array(bytes));

  // return the result
  return text;
}

export function octalToText(octal) {
  // remove any spaces from the input string
  let error;
  let text = "";
  const oc = octal.split(" ");

  // check for invalid input (non-octal characters)
  oc.forEach((e) => {
    if (/[^0-7]/.test(e)) {
      return (error = "invalid input! must contain octal character only");
    }
    // decode e using UTF-8 encoding
    text += String.fromCharCode(parseInt(e, 8));
  });
  if (error) return error;
  // return the result
  return text;
}

export function decimalToText(decimal) {
  let error;
  let text = "";
  let dec = decimal.split(" ");
  // check for invalid input (not a number or outside the valid ASCII range)
  dec.forEach((e) => {
    if (isNaN(e) || e < 0 || e > 127) {
      return (error =
        "invalid input (not a number or outside the valid ASCII range)");
    }
    // encode the decimal value as an ASCII character
    text += String.fromCharCode(e);
  });
  if (error) return error;
  // return the result
  return text;
}

export function textToHex(text) {
  let hexString = "";

  // convert each character in the string to its corresponding hexadecimal value

  for (let i = 0; i < text.length; i++) {
    const hexValue = text.charCodeAt(i).toString(16);
    hexString += `${hexValue} `;
  }

  // return the resulting string of hexadecimal values
  return hexString;
}

export function textToOctal(text) {
  let octalString = "";

  // convert each character in the string to its corresponding octal value
  for (let i = 0; i < text.length; i++) {
    const octalValue = text.charCodeAt(i).toString(8);
    octalString += octalValue + " ";
  }

  // return the resulting string of octal values
  return octalString.trim();
}
