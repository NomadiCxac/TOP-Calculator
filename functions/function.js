// This section defines all the variables and events required for my calculator
 
calculatorDisplay = document.getElementById("inputDisplay");
 
let firstOperand = "";
let mathOperation = "";
let secondOperand = "";
 
 
const numberClick = document.querySelectorAll("button.inputNumber");
numberClick.forEach(number => number.addEventListener("click", numberPress));
 
const operatorClick = document.querySelectorAll("button.inputOperation");
operatorClick.forEach(operator => operator.addEventListener("click", (operatorPress)));
 
const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", includeDecimal);
 
const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", backspace);
 
const equalButton = document.querySelector("#equals");
equalButton.addEventListener("click", operate);
 
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearCalculator);
 
// My Functions Below
 
function add (x, y) {
    let sum = 0;
    sum = (x + y);
    return sum;
}
 
function subtract (x, y) {
    let subtraction = 0;
    subtraction = (x - y);
    return subtraction;
}
 
function divide (x, y) {
    let quotient = 0;
    quotient = (x / y);
    let divisionError = undefined;
 
    if (y == 0) {
        return divisionError;
    } else {
        return quotient;
    }
 
}
 
function multiply (x, y) {
    let product = 0;
    product = (x * y);
    return product;
}
 
// Function for number presses
function numberPress (e) {
 
        pressedButton = (e.target.id);
 
        // Case 1: recognizing first operand inputs:
 
 
        // Condition 1a: if there is no stated math operation, we will begin storing values for the first operand and printing them on screen 
        if (mathOperation === "")  {
            calculatorDisplay.textContent += pressedButton;
            firstOperand = calculatorDisplay.textContent;
        }
        
 
        // Condition 1b: if the first key pressed for the first operand is 0 and clicks some other number afterwards, replace 0 with the clicked number.
        // e.g.: 0 --> "5" NOT 0 --> "05"
 
        if (mathOperation === "" && firstOperand[0] === "0" && firstOperand.length === 2) {
            console.log("True");
            calculatorDisplay.textContent = pressedButton;
            firstOperand = calculatorDisplay.textContent;
        } 
 
 
        // Case 2: recognizing second operand inputs:
 
        // Condition 2a: if the user has provided a first operand value and a math operation, then we will begin storing values for the second operand and printing them on screen
        // IF we are looking for the initial number input; this is when the length of our second operand string(array) is less than 1 
        // we will remove all previous values from the display and initialize a number from 0 - 9 | e.g. "280" -> "6" OR "+"" -> "9" | NOT "280" -> "2806" OR "+"" -> "+9" |
        // After our initial condition, we will append numbers to the display as long as the length of our second operand string(array) is greater than 0
 
        if (firstOperand !== "" && mathOperation !== "" && secondOperand.length < 1) {
            calculatorDisplay.textContent = "";
            calculatorDisplay.textContent = pressedButton;
            secondOperand = calculatorDisplay.textContent;
            console.log("true1");
        } else if (secondOperand.length > 0) {
            calculatorDisplay.textContent += pressedButton;
            secondOperand = calculatorDisplay.textContent;
            console.log("true2");
        }
 
        // Condition 2b: see condition 1b)
 
        if (secondOperand[0] === "0" && secondOperand.length === 2) {
            calculatorDisplay.textContent = pressedButton;
            secondOperand = calculatorDisplay.textContent;
        }
 
 
        
    }
 
// Functon for operator presses
function operatorPress (e) {
 
        // This would be: "+", "-", "*", "/"
 
        pressedButton = (e.target.innerText);  
 
        // This would be: "add", "subtract", "*" "divide"
 
        operatorFunction = (e.target.id);    
 
        // If the calculator has no initial number input, do not print or store a operation value
        
        if (calculatorDisplay.innerText == "") {
            operatorFunction = "";
            return;
        } 
 
        // Condition 1: IF user decides to change their mind and switch the operation type, considering first operand and math operation are NON-empty values; 
        // second operand is empty in this case
        
        if (firstOperand !== "" && mathOperation !== "" && secondOperand === "") {
            calculatorDisplay.innerText = pressedButton;
            mathOperation = operatorFunction; 
        }
        
        // Condition 2: IF user decides to click a mathematical operator after all input variables are given, carry out the mathematical operation
        // in this case: the result of mathOperation(firstOperand, secondOperand) "a.k.a operate()" will get stored in the firstOperand variable, while the operatorPress event
        // will store the newly pressed math operation in the mathOperation variable. The second operation will be cleared to "" and pending input from the user.
 
        if (firstOperand !== "" && mathOperation !== "" && secondOperand !== "") {
            
            console.log(firstOperand, mathOperation, secondOperand);
            calculation = operate();
            calculatorDisplay.textContent = calculation;
            mathOperation = operatorFunction;
        } 
 
        // Condition 3: IF the mathOperation value is empty, store a new math operation value
 
        if (mathOperation === "") {
            calculatorDisplay.innerText = pressedButton;
            mathOperation = operatorFunction; 
        }
 
 
}
 
//Function to Backspace Chars
function backspace (e) {
 
        delButton = e.target.id;
        currentDisplay = calculatorDisplay.textContent;
 
        // The delete event is represented by taking the current display string(array) (or operand 1 || operand 2), identifying the outer most array value
        // and returning a substring that is the length of the array - 1
 
        delEvent = calculatorDisplay.textContent.substring(0, currentDisplay.length - 1);
 
 
        if (delButton && (calculatorDisplay.textContent.length != 0)) {
            calculatorDisplay.textContent = delEvent;
        }
 
 
        if (mathOperation && firstOperand) {
            secondOperand = calculatorDisplay.textContent;
        } else {
            firstOperand = calculatorDisplay.textContent;
        }
}
 
function includeDecimal (e) {
 
    pressedButton = (e.target.id);
    console.log(pressedButton);
 
    // All conditions check to see if the first/second operand already contains a decimal value. If a decimal already exists, do nothing.
    // the indexOf logic can be factored out in a while loop for the cases that pertain to either operand. 
 
 
    // Condition 1: Calculator's first button input is a decimal and will apply to the first operand
 
    if (firstOperand.indexOf(".") !== -1 && firstOperand === "" && mathOperation === "" && secondOperand === "") {
        calculatorDisplay.textContent = "0.";
        firstOperand = "0.";
    }
 
    // Condition 2: Calculator input values from the user apply to the first operand 
 
    if (firstOperand.indexOf(".") === -1 && firstOperand !== "" && mathOperation === "" && secondOperand === "") {
        calculatorDisplay.textContent += ".";
        firstOperand += ".";
    }
 
    // Condition 3: Calculator input values from the user apply to the second operand
 
    if (secondOperand.indexOf(".") === -1 && calculatorDisplay.textContent !== "" && firstOperand !== "" && secondOperand !== "") {
        calculatorDisplay.textContent += ".";
        secondOperand += ".";
    }
 
    // Condition 4: User clicks the decimal button after a mathematical operation. This value will pertain to the second operand. 
    // e.g. (Inputs in order: "+"" -> "." expected-> "0." | NOT "+" -> "." -> "+." OR "+" -> "." -> NaN) 
 
    if (secondOperand.indexOf(".") === -1 && secondOperand === "" && mathOperation !== "" && firstOperand !== "") {
        calculatorDisplay.textContent = "0.";
        secondOperand = "0.";
    } 
 
}
 
// Clear calculator of all values
 
function clearCalculator () {
 
    calculatorDisplay.textContent = "";
    firstOperand = calculatorDisplay.textContent;
    secondOperand = calculatorDisplay.textContent;
    mathOperation = calculatorDisplay.textContent;
    console.log("cleared")
 
    return;
}
 
// Operate function to evaluate mathematical operations. Executes only after the "=" button is pressed OR a mathematical operation is chosen instead
 
function operate () {    
    
    let calculation = 0;
 
    // Corner case: if any value is not given OR empty, immediately quit the function
 
    if (firstOperand === "" || mathOperation === "" || secondOperand === "") {
        console.log("True");
        return;
    } 
 
    // calls fn "add"
    if (mathOperation === "add") {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        calculation = add(firstOperand, secondOperand);
    }
 
    // calls fn "subtract"
    if (mathOperation === "subtract") {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        calculation = subtract(firstOperand, secondOperand);
    }
 
    // calls fn "multiply"
    if (mathOperation === "multiply") {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        calculation = multiply(firstOperand, secondOperand);
    }
 
    // calls fn "divide"
    if (mathOperation === "divide") {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        calculation = divide(firstOperand, secondOperand);
    }
 
    // Average case: perform the mathematical operation and store the resulting valuye in the first operand. Return the values to type string 
    // and set math operation and second operation to empty string values
    // e.g. operate() => multiply(firstOperand = 4, secondOperand = 3) --> 12 
    // after operate() is executed.. firstOperand = "12"; mathOperation = "" (UNLESS a math operator is selected instead of equals); secondOperand = "";
 
    if (calculation !== undefined) {
        calculatorDisplay.textContent = calculation;
        firstOperand = (`${calculation}`);
        mathOperation = "";
        secondOperand = "";
    } 
    
    // Corner case: if user is trying to divide by "0", return an alert that states the error.
    // "stringify" and return the outstanding values until a legal value is given.
 
    else {
        alert("Can't divide by 0");
        firstOperand = (`${firstOperand}`);
        mathOperation = (`${mathOperation}`);
        secondOperand = (`${secondOperand}`);
    }
    
 
    return firstOperand;
   
}