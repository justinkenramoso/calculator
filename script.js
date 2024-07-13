const display = document.querySelector(".display");

const numberButtons = [...document.querySelectorAll(".number-btn")];
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => numberPress(numberBtn.textContent))
})

const operationButtons = [...document.querySelectorAll(".ops-btn")];
operationButtons.forEach(operationBtn => {
    operationBtn.addEventListener("click", (e) => {

        if (!firstNumber && !secondNumber) {
            firstNumber = display.textContent;
            operation = e.target.textContent;
        } else if (firstNumber && operation) {
            secondNumber = display.textContent;
            const answer = operate(firstNumber, secondNumber, operation);
            display.textContent = answer;
            firstNumber = answer;
            operation = e.target.textContent;
            secondNumber = "";
        }

    })
})

const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => clear());

function clear() {
    firstNumber = undefined;
    operation = "";
    secondNumber = undefined;
    display.textContent = "";
}

function numberPress(number) {
    display.textContent += number;
}

let firstNumber;
let operation = "";
let secondNumber;

function operate(num1, num2, ops) {

    let result = 0;

    switch (ops) {

        case "+": 
        result = num1 + num2;
        break;

        case "-": 
        result = num1 - num2;
        break;

        case "X": 
        result = num1 * num2;
        break;

        case "/":
        result = num1 / num2;
        break;

        case "=": 
        
        break;
    }

    return result;

}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}