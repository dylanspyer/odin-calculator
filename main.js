let operator = "";
let currentValue = "";
let previousValue = "";

const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");
const decimalBtn = document.querySelector(".decimal");
const mainOutput = document.querySelector(".main-output");
const secondaryOutput = document.querySelector(".secondary-output");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "×") {
    previousValue *= currentValue;
  } else if (operator === "÷") {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = currentValue.toString();
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  mainOutput.textContent = currentValue;
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function addDecimal() {
  currentValue = currentValue.toString();
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}

function clear() {
  mainOutput.textContent = "";
  secondaryOutput.textContent = "";
  previousValue = "";
  currentValue = "";
  operator = "";
}

deleteBtn.onclick = () => deleteLast();
decimalBtn.onclick = () => addDecimal();
clearBtn.onclick = () => clear();
numberBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    mainOutput.textContent = currentValue;
  });
});
operatorBtn.forEach((op) => {
  op.addEventListener("click", function (e) {
    if (currentValue != "") {
      handleOperator(e.target.textContent);
      secondaryOutput.textContent = `${previousValue} ${operator}`;
      mainOutput.textContent = currentValue;
    }
  });
});
equalsBtn.onclick = function () {
  if (currentValue != "" && previousValue != "") {
    operate();
    secondaryOutput.textContent = "";
    currentValue = previousValue;
    if (previousValue.length <= 5) {
      mainOutput.textContent = previousValue;
    } else {
      mainOutput.textContent = previousValue.slice(0, 5) + "...";
    }
  }
};

//Bug - After you have a currentValue and currentValue, if you press an operator button instead of equals, the equation doesn't get evaluated.
