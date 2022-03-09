const output = document.querySelector(".output")
const preview = document.querySelector("preview")
const numberButtons = document.querySelectorAll("button.number")
const operations = document.querySelectorAll("button.operations")
let result = false


numberButtons.forEach(element => {
    element.addEventListener("click", event => {
        console.log(element.textContent)
        output.innerText += `${element.textContent}`
    })
})

operations.forEach(element => {
    element.addEventListener("click", () => {
        const number = Number(output.textContent)
        output.innerText = ``

        if (element.textContent == "X") {    
            multiplication(output, number, element)
        }

        if (element.textContent == "=") {
            show(result)
        }
    })
})

function multiplication(saida, numero, elemento) {
        console.log("Multiplicando")
        if (result == false) {
            result = 1
            result *= numero
        } else {
            var otherNumbers = numero 
            result *= otherNumbers
        }
}

function show(result) {
    console.log(result)
}