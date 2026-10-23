/*defining the DOM methods */
const btn = document.querySelectorAll("button");
const display = document.getElementById("calculator-display");
const equalValue = document.getElementById("equal");
// const clearValue = document.getElementbyId("clear");

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
        if (operand === "" && operand) {
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

const equalCalculation = () => {
   //if press equal then do calculations
   // press a button to change the value of the display
  if (buttonValues === "=") {
      
   }
}
