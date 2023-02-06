calculatorDisplay = document.getElementById("inputDisplay");


const num1 = 0;
const num2 = 0;

const numberClick = document.querySelectorAll("button.inputNumber");
numberClick.forEach(number => number.addEventListener("click", (printNumber)));

const operatorClick = document.querySelectorAll("button.inputOperation");
operatorClick.forEach(operator => operator.addEventListener("click", (printOperator)));

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
    return quotient;
}

function multiply (x, y) {
    let product = 0;
    product = (x * y);
    return product;
}

function operate (x, operator, y) {    
    let calculation = 0;
    calculation = operator(x,y);
    return calculation;
}

function printNumber (e) {
        pressedButton = parseInt(e.target.id);
        calculatorDisplay.textContent += pressedButton;
        return pressedButton;
    }

// Complete Function to Backspace Chars
function backspace (e) {

        delButton = e.target.id;
        currentDisplay = calculatorDisplay.textContent;
        delEvent = currentDisplay.substring(0, currentDisplay.length-1);

 
        if (delButton && (calculatorDisplay.textContent.length != 0)) {
            calculatorDisplay.textContent = delEvent;
            console.log(calculatorDisplay.textContent.length);
        }
}

function printOperator (e) {
        operator = calculatorDisplay.innerText;
        operatorFunction = (e.target.id);    
        pressedButton = (e.target.innerText);  
        if (operator == ("" || "+" || "-" || "*" || "/")) {
            return;
        }
        calculatorDisplay.textContent = pressedButton;
        return operatorFunction;   
}

function clearCalculator (e) {
    calculatorDisplay.textContent = "";
    return;
}


// TO DO:

// Use an array.reduce function for the case when a user provides a mathematical expression that does not involve an equals sign:
// e.g: 23 + 42 - 47 -- otherwise written as:
// 23 + 42 --> accumulates to 65
// 65 - 47 --> accumulates to 18