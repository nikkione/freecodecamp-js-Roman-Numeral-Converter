const inputNum = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");

// const romanNames = [
//   { M: 1000 },
//   { CM: 900 },
//   { D: 500 },
//   { CD: 400 },
//   { C: 100 },
//   { XC: 90 },
//   { L: 50 },
//   { XL: 40 },
//   { X: 10 },
//   { IX: 9 },
//   { V: 5 },
//   { IV: 4 },
//   { I: 1 },
// ];

const romanNames = [
  { roman: "M", arabic: 1000 },
  { roman: "CM", arabic: 900 },
  { roman: "D", arabic: 500 },
  { roman: "CD", arabic: 400 },
  { roman: "C", arabic: 100 },
  { roman: "XC", arabic: 90 },
  { roman: "L", arabic: 50 },
  { roman: "XL", arabic: 40 },
  { roman: "X", arabic: 10 },
  { roman: "IX", arabic: 9 },
  { roman: "V", arabic: 5 },
  { roman: "IV", arabic: 4 },
  { roman: "I", arabic: 1 },
];

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
    //another way with while loop
    let i = 0;
    while (input > 0 && i < romanNames.length) {
      const { roman, arabic } = romanNames[i];
      const num = Math.floor(input / arabic);

      if (num >= 1) {
        outputStr += roman.repeat(num);
        input -= num * arabic;
      }

      i++;
    }
    outputContainer.innerText = outputStr;
  }
};

convertBtn.addEventListener("click", convertToRoman);

// const convertToRomanFor = () => {
//   let input = parseInt(inputNum.value);
//   let outputStr = "";
//   if (validateInput(input)){
//     for (let i = 0; i < romanNames.length; i++) {
//       Object.entries(romanNames[i]).forEach(([key, value]) => {
//         const num = Math.floor(input / value);

//         aif (num >= 1) {
//           outputStr += `${key}`.repeat(num);
//           input -= num * value;
//         }
//       });
//     }
//   outputContainer.innerText = outputStr;
//   }
// };

// const convertToRomanOld = () => {
//   let input = parseInt(inputNum.value);

//   let outputStr = "";

//   if (validateInput(input)) {
//     const M = Math.floor(input / 1000);
//     if (M >= 1) {
//       outputStr += "M".repeat(M);
//       input -= M * 1000;
//     }
//     const CM = Math.floor(input / 900);
//     if (CM >= 1) {
//       outputStr += "CM".repeat(CM);
//       input -= CM * 900;
//     }
//     const D = Math.floor(input / 500);
//     if (D >= 1) {
//       outputStr += "D".repeat(D);
//       input -= D * 500;
//     }
//     const CD = Math.floor(input / 400);
//     if (CD >= 1) {
//       outputStr += "CD".repeat(CD);
//       input -= CD * 400;
//     }
//     const C = Math.floor(input / 100);
//     if (C >= 1) {
//       outputStr += "C".repeat(C);
//       input -= C * 100;
//     }
//     const XC = Math.floor(input / 90);
//     if (XC >= 1) {
//       outputStr += "XC".repeat(XC);
//       input -= XC * 90;
//     }
//     const L = Math.floor(input / 50);

//     if (L >= 1) {
//       outputStr += "L".repeat(L);
//       input -= L * 50;
//     }
//     const XL = Math.floor(input / 40);

//     if (XL >= 1) {
//       outputStr += "XL".repeat(XL);
//       input -= XL * 40;
//     }
//     const X = Math.floor(input / 10);

//     if (X >= 1) {
//       outputStr += "X".repeat(X);
//       input -= X * 10;
//     }
//     const IX = Math.floor(input / 9);

//     if (IX >= 1) {
//       outputStr += "IX".repeat(IX);
//       input -= IX * 9;
//     }
//     const V = Math.floor(input / 5);

//     if (V >= 1) {
//       outputStr += "V".repeat(V);
//       input -= V * 5;
//     }
//     const IV = Math.floor(input / 4);

//     if (IV >= 1) {
//       outputStr += "IV".repeat(IV);
//       input -= IV * 4;
//     }
//     const I = Math.floor(input / 1);

//     if (I >= 1) {
//       outputStr += "I".repeat(I);
//       input -= I * 1;
//     }

//     outputContainer.innerText = outputStr;
//   }
// };

// const printToOutput = () => {};
