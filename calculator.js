/*defining the DOM methods */
const btn = document.querySelectorAll("button");
const display = document.querySelector(".calculator-display");

/*Local variables*/
let firstValue = "";
let secondValue = "";
let operand = "";

/*Test functions using console.log */
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

/*function to take two numbers and operator */
function operate(firstValue, operand, secondValue) {
  switch (operand.trim()) {
    case '+':
      return addition(firstValue, secondValue);
    case '-':
      return subtraction(firstValue, secondValue);
    case '*':
      return multiplication(firstValue, secondValue);
    case '/':
      return division(firstValue, secondValue);
  }
}

btn.forEach((button) => {
  const buttonValues = btn.innerText;
  button.onClick = () => {
    handleButton(buttonValues);
  };
});

function changeDisplay() {
  display.innerText = firstValue || 0
}
