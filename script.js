const display = document.querySelector(".display");

const numberButtons = [...document.querySelectorAll(".number-btn")];
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => numberPress(numberBtn.textContent))
})

const operationButtons = [...document.querySelectorAll(".ops-btn")];
operationButtons.forEach(operationBtn => {
    operationBtn.addEventListener("click", (e) => {

        if (e.target.textContent != "=") {
            pressTracker.shift();
            pressTracker.push("ops");
        }

        if (pressTracker[0] === "ops" && pressTracker[1] === "ops") {
            alert("Error: cannot press operation twice!")
            clear();
        }

        if (!firstNumber) {
            firstNumber = parseInt(display.textContent);
            operation = e.target.textContent;
            clearOnNextPress = true;
        } else if (firstNumber && !secondNumber){

            secondNumber = parseInt(display.textContent);

            if (operation === "÷" && (firstNumber === 0 || secondNumber === 0)) {
                alert("No. You can't.")
                clear();
            }

            switch (operation) {
                case "+": 
                    firstNumber = add(firstNumber, secondNumber);
                    break;
                case "-": 
                    firstNumber = subtract(firstNumber, secondNumber);
                    break;
                case "x": 
                    firstNumber = multiply(firstNumber, secondNumber);
                    break;
                case "÷": 
                    firstNumber = divide(firstNumber, secondNumber);
                    break;
            }
            if (firstNumber % 1 != 0) {
                firstNumber = firstNumber.toFixed(2);
            }
            secondNumber = undefined;
            operation = e.target.textContent;
            display.textContent = firstNumber;
            clearOnNextPress = true;
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
    clearOnNextPress = false;
    pressTracker = ["",""]
}

function numberPress(number) {

    pressTracker.shift();
    pressTracker.push("num");

    if (clearOnNextPress) {
        display.textContent = "";
        clearOnNextPress = false;
    }
    display.textContent += number;
}

let firstNumber;
let operation = "";
let secondNumber;
let clearOnNextPress = false;
let pressTracker = ["",""];

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