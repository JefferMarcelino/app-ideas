const buttons = document.querySelectorAll("button")
const output = document.querySelector(".current-operand")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (button.classList.contains("number")) {
            //output.innerHTML += button.value
            console.log(button.value)
        }
    })
})
