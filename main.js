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
let operator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;

const btn = document.querySelectorAll(".btn");
const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear-button");
const output = document.querySelector(".output");

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

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
  }
}

function handleClick() {
  if (operator === null) {
    firstOperand = parseInt(output.textContent);
  } else if (operator != null && result === null) {
    secondOperand = parseInt(output.textContent);
  } else if (result != null) {
    firstOperand = result;
    secondOperand = Number(displayValue);
  }
}

function clear() {
  output.textContent = "";
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = null;
  console.log(firstOperand);
  console.log(secondOperand);
  console.log(result);
}

clearBtn.onclick = () => clear();

equalsBtn.onclick = function () {
  result = Number(operate(firstOperand, secondOperand, operator));
  output.textContent = result;
  console.log(firstOperand);
  console.log(secondOperand);
  console.log(result);
};

numberBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    output.textContent += event.target.innerText;
    displayValue = output.textContent;
    handleClick();
  });
});

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    operator = event.target.innerText;
    output.textContent = "";
  });
});

//Bug - if you evaluate an equation and then add numbers to the result, it doesn't change firstOperand to include the numbers you added:
//How it should work: get rid of what's on the screen and start a new equation if you press a number
