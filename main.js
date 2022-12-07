function add(...args) {
  return args.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function subtract(...args) {
  return args.reduce(function (a, b) {
    return a - b;
  }, 0);
}

function multiply(...args) {
  return args.reduce(function (a, b) {
    return a * b;
  }, 0);
}

function divide(...args) {
  return args.reduce(function (a, b) {
    return a / b;
  }, 0);
}

function operate(operator, ...args) {
  switch (operator) {
    case "+":
      return add(...args);
    case "-":
      return subtract(...args);
    case "*":
      return multiply(...args);
    case "/":
      return divide(...args);
  }
}

console.log(operate("*", 20, 2, 2));
