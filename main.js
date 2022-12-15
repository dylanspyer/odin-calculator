// function add(...args) {
//   return args.reduce(function (a, b) {
//     return a + b;
//   }, 0);
// }

// function subtract(...args) {
//   return args.reduce(function (a, b) {
//     return a - b;
//   }, 0);
// }

// function multiply(...args) {
//   return args.reduce(function (a, b) {
//     return a * b;
//   }, 0);
// }

// function divide(...args) {
//   return args.reduce(function (a, b) {
//     return a / b;
//   }, 0);
// }

// function operate(operator, ...args) {
//   switch (operator) {
//     case "+":
//       return add(...args);
//     case "-":
//       return subtract(...args);
//     case "×":
//       return multiply(...args);
//     case "÷":
//       return divide(...args);
//   }
let displayValue = "0";
let operator = "";
let currentValue = "";
let previousValue = "";
let result = "";

const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");
const decimalBtn = document.querySelector(".decimal");
let mainOutput = document.querySelector(".main-output");
let secondaryOutput = document.querySelector(".secondary-output");

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

deleteBtn.onclick = () => deleteLast();

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

decimalBtn.onclick = () => addDecimal();

function clear() {
  mainOutput.textContent = "";
  secondaryOutput.textContent = "";
  previousValue = "";
  currentValue = "";
  operator = "";
  result = "";
}

clearBtn.onclick = () => clear();

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
  console.log(currentValue);
  console.log(previousValue);
};

numberBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    mainOutput.textContent = currentValue;
  });
});

operatorBtn.forEach((op) => {
  op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    secondaryOutput.textContent = `${previousValue} ${operator}`;
    mainOutput.textContent = currentValue;
  });
});

//Bug - if you evaluate an equation and then add numbers to the result, it doesn't change previousValue to include the numbers you added:
//How it should work: get rid of what's on the screen and start a new equation if you press a number

//Bug - After you have a currentValue and currentValue, if you press an operator button instead of equals, the equation doesn't get evaluated.
