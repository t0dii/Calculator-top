/*defining the DOM methods */
const display = document.getElementById("calculator-display");
const equalValue = document.getElementById("equal");
const clearValue = document.getElementById("clear");

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
const operate = (firstValue, operand, secondValue) => {
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

//Updates the display, defaults to zero
const changeDisplay = () => {
  display.innerText = firstValue + operand + secondValue || "0";
}

//Handles the property assigned to the button for numbers
const numDisplayValue = document.querySelectorAll(".num, .op");
  numDisplayValue.forEach(changeValue =>
    changeValue.addEventListener('click', () => {
      if (changeValue.classList.contains("num")) {
        if (operand === "") {
          firstValue += changeValue.textContent;
        } else {
          secondValue += changeValue.textContent;
        }
      changeDisplay();
    } else {
      operand = changeValue.textContent;
      changeDisplay();
    }
  })
)

//Does the calculations
const equalCalculation = () => {
  const result = operate(Number(firstValue), operand, Number(secondValue));
  firstValue = String(result);
  secondValue = '';
  operand = '';
  changeDisplay();
}
equalValue.addEventListener('click', equalCalculation);

//Clears the value on the display
const clearDisplay = () => {
  firstValue = '';
  operand = '';
  secondValue = '';
  changeDisplay();
}
clearValue.addEventListener('click', clearDisplay)
