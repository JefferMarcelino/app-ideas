const numberButtons = document.querySelectorAll("button.number")
const operationButtons = document.querySelectorAll("button.operation")

const equalButton = document.querySelector(".equal")

const clearButton = document.querySelector(".clear")

const lastNumButton = document.querySelector(".last-num")

const output = document.querySelector(".current-operand")

numberButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (output.innerHTML === "0") {
            output.innerText = button.textContent
        } else {
            output.innerText += button.textContent
        }
        console.log(button.textContent)
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (output.innerText !== "") {
            output.innerText += button.textContent
            console.log(button.textContent)
        }
    })
})

equalButton.addEventListener("click", () => {
    output.innerText = eval(output.innerHTML.replace("X", "*"))
})

clearButton.addEventListener("click", () => {
    output.innerHTML = 0
})

lastNumButton.addEventListener("click", () => {
    output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1)
})