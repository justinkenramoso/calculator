const display = document.querySelector(".display");

const numberButtons = [...document.querySelectorAll(".number-btn")];
numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener("click", () => numberPress(numberBtn.textContent))
})

function numberPress(number) {
    display.textContent += number;
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