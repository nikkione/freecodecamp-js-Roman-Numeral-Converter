const inputNum = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");

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

let outputStr = "";

const convertToRoman = (input) => {
  if (input === 0) {
    return "";
  }
  const someObj = romanNames.find((object) => object.arabic <= input);
  if (someObj) {
    return someObj.roman + convertToRoman(input - someObj.arabic);
  } else {
    return ""; // This case is a fallback and ideally should not be reached
  }
};

convertBtn.addEventListener("click", () => {
  const input = parseInt(inputNum.value);
  if (validateInput(input)) {
    const romanNumeral = convertToRoman(input);
    outputContainer.innerText = romanNumeral;
  }
});
