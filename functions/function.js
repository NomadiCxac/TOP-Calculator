calculatorDisplay = document.getElementById("inputDisplay");

let displayNumber = "";
let displayOperation = "";
let displayNumber2 = "";

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


function printNumber (e) {

        pressedButton = parseInt(e.target.id);

        if (calculatorDisplay.textContent === "+" || calculatorDisplay.textContent === "-" || calculatorDisplay.textContent === "/" || calculatorDisplay.textContent === "*") {
            calculatorDisplay.textContent = "";
            calculatorDisplay.textContent = pressedButton;
            displayNumber2 = calculatorDisplay.textContent;
        } 
        else if (displayNumber !== "" && displayOperation !== "" && displayNumber2 === "") {
            calculatorDisplay.textContent = "";
            calculatorDisplay.textContent = pressedButton;
            displayNumber2 = pressedButton;
        }
        else if (displayOperation) {
            calculatorDisplay.textContent += pressedButton;
            displayNumber2 = calculatorDisplay.textContent;
        } else {
            calculatorDisplay.textContent += pressedButton;
            displayNumber = calculatorDisplay.textContent;
        }

        
        
        return pressedButton;
    }

function printOperator (e) {

        let calculation = 0;
        displayNumber = parseInt(displayNumber);
        displayNumber2 = parseInt(displayNumber2);

        // These variables display the sign of the operation on the calculator;
        pressedButton = (e.target.innerText);  

        // This variable returns the string value that refers to an operation. E.g: "add" OR "divide".
        operatorFunction = (e.target.id);    

        // If the calculator has no initial number input, do not print or store a operation value
        if (calculatorDisplay.innerText == "") {
            return;
        } 
        
        // If an operator is pressed in the condition where all inputs are already given, perform the correct operation to displayNumber1 and displayNumber2
        // Store the value of the operation in displayNumber1, update the displayOperation to the pressed operator and set displayNumber2 to ""
        if (displayNumber !== "" && displayOperation !== "" && displayNumber2 !== "") {

            calculation = operate();
            calculatorDisplay.textContent = calculation;
            displayOperation = operatorFunction;

            return calculation;
        } 

        if (displayNumber !== "" && displayOperation !== "" && displayNumber2 === "") {
            
            calculation = operate();
            calculatorDisplay.textContent = calculation;
            displayOperation = operatorFunction;

            return calculation;
        } 


        
        calculatorDisplay.innerText = pressedButton;
        displayOperation = operatorFunction; 
        return displayOperation;
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


        if (displayOperation && displayNumber) {
            displayNumber2 = calculatorDisplay.textContent;
        } else {
            displayNumber = calculatorDisplay.textContent;
        }

        // if (displayOperation != "") {
        //     displayOperation = "";
        //     calculatorDisplay.textContent = displayNumber;
        // }


        return calculatorDisplay.textContent;
}



function clearCalculator () {

    calculatorDisplay.textContent = "";
    displayNumber = calculatorDisplay.textContent;
    displayNumber2 = calculatorDisplay.textContent;
    displayOperation = calculatorDisplay.textContent;
    console.log("cleared")
    return;
}

function operate () {    
    
    let calculation = 0;
    displayNumber = parseInt(displayNumber);
    displayNumber2 = parseInt(displayNumber2);

    if (displayNumber === "" || displayOperation === "" || displayNumber2 === "") {
        return;
    } 

    if (displayOperation === "add") {
        calculation = add(displayNumber, displayNumber2);
    }

    if (displayOperation === "subtract") {
        calculation = subtract(displayNumber, displayNumber2);
    }

    if (displayOperation === "multiply") {
        calculation = multiply(displayNumber, displayNumber2);
    }

    if (displayOperation === "divide") {
        calculation = divide(displayNumber, displayNumber2);
    }

    calculatorDisplay.textContent = calculation;
    displayNumber = calculation;
    displayOperation = "";
    displayNumber2 = "";

    return displayNumber;
   
}
// TO DO:

