const inputNum = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");

const validateInput = (input) => {
  output.innerText = "";

  if (isNaN(input)) {
    outputContainer.innerText = "Please enter a valid number.";
  } else if (input > 3999) {
    outputContainer.innerText =
      "Please enter a number less than or equal to 3999.";
  } else if (input < 1) {
    outputContainer.innerText =
      "Please enter a number greater than or equal to 1.";
  } else {
    return true;
  }
};

const convertToRoman = () => {
  let input = parseInt(inputNum.value);

  let outputStr = "";

  if (validateInput(input)) {
    const M = Math.floor(input / 1000);
    if (M >= 1) {
      outputStr += "M".repeat(M);
      input -= M * 1000;
    }
    const CM = Math.floor(input / 900);
    if (CM >= 1) {
      outputStr += "CM".repeat(CM);
      input -= CM * 900;
    }
    const D = Math.floor(input / 500);
    if (D >= 1) {
      outputStr += "D".repeat(D);
      input -= D * 500;
    }
    const CD = Math.floor(input / 400);
    if (CD >= 1) {
      outputStr += "CD".repeat(CD);
      input -= CD * 400;
    }
    const C = Math.floor(input / 100);
    if (C >= 1) {
      outputStr += "C".repeat(C);
      input -= C * 100;
    }
    const XC = Math.floor(input / 90);
    if (XC >= 1) {
      outputStr += "XC".repeat(XC);
      input -= XC * 90;
    }
    const L = Math.floor(input / 50);

    if (L >= 1) {
      outputStr += "L".repeat(L);
      input -= L * 50;
    }
    const XL = Math.floor(input / 40);

    if (XL >= 1) {
      outputStr += "XL".repeat(XL);
      input -= XL * 40;
    }
    const X = Math.floor(input / 10);

    if (X >= 1) {
      outputStr += "X".repeat(X);
      input -= X * 10;
    }
    const IX = Math.floor(input / 9);

    if (IX >= 1) {
      outputStr += "IX".repeat(IX);
      input -= IX * 9;
    }
    const V = Math.floor(input / 5);

    if (V >= 1) {
      outputStr += "V".repeat(V);
      input -= V * 5;
    }
    const IV = Math.floor(input / 4);

    if (IV >= 1) {
      outputStr += "IV".repeat(IV);
      input -= IV * 4;
    }
    const I = Math.floor(input / 1);

    if (I >= 1) {
      outputStr += "I".repeat(I);
      input -= I * 1;
    }

    outputContainer.innerText = outputStr;
  }
};

const printToOutput = () => {};

convertBtn.addEventListener("click", convertToRoman);