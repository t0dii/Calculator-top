/*defining the DOM methods */
const btn = document.querySelectorAll("button");
const display = document.getElementById("calculator-display");
// const equalValue = document.getElementsById("equal");
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

//Handles the property assigned to the button for numbers
let numDisplayValue = document.querySelectorAll(".num, .op");
for (let i = 0; i < numDisplayValue.length; i++) {
  let changeValue = numDisplayValue[i];
  changeValue.addEventListener('click', () => {
    document.getElementById("calculator-display").innerHTML += changeValue.innerHTML
  })
}

//Updates the display, defaults to zero
const changeDisplay = () => {
  display.innerText = firstValue || "0";
}

const equalCalculation = () => {
   //if press equal then do calculations
   // press a button to change the value of the display
  if (buttonValues === "=") {

   }
}
