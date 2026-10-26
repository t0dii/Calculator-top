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
  //loop through the buttons
  numDisplayValue.forEach(changeValue =>
    changeValue.addEventListener('click', () => {
      if (changeValue.classList.contains("num")) {
        //Checks if operand is empty
        // If so change first value
        if (operand === "") {
          firstValue += changeValue.textContent;
        } else {
          secondValue += changeValue.textContent;
        }
      changeDisplay();
      } else {
        //If operand is not empty, calculate
        if (operand !== "" && secondValue !== "") {
          evaluate();
        }
        //Else change the value of the operand.
      operand = changeValue.textContent;
      changeDisplay();
    }
  })
)

//Does the calculations
const evaluate = () => {
  //changes the values from string to number
  const result = operate(Number(firstValue), operand, Number(secondValue));
  //store the values into the first value
  firstValue = String(result);
  //clear the second and operand
  secondValue = '';
  operand = '';
  changeDisplay();
}

const equalCalculation = () => {
  evaluate();
}
//Need this to make the button work
equalValue.addEventListener('click', equalCalculation);

//Clears the value on the display
const clearDisplay = () => {
  firstValue = '';
  operand = '';
  secondValue = '';
  changeDisplay();
}
clearValue.addEventListener('click', clearDisplay)
