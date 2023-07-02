const calcInput = document.getElementById("calc-output");
const calcResult = document.getElementById("calc-result");

const addValue = (input) => {
  calcInput.value += input;
  calculator(calcInput.value);
};

const clearDisplay = () => {
  calcInput.value = "";
  calcResult.value = "";
};
function backspace() {
    calcInput.value = calcInput.value.slice(0, -1);
    calcResult.value = calcResult.value.slice(0, -1);
  }
const calculator = (input) => {
  let value = calcInput.value;
  let result = eval(value);
  calcResult.value = result;
};
const calculate = () => {
    calcInput.value = calcResult.value;
    calcResult.value = "";
  };
