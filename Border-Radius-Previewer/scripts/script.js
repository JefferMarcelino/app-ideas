const output = document.querySelector("div.output")
const border = document.querySelector("div.border")
const inputs = document.querySelectorAll("input")

inputs.forEach(element => {
    element.addEventListener("change", (event) => {
        const value = element.value
        console.log(value, event.target)
        changeBorder(value, event.target)
    })
})

function changeBorder(value, event) {
    if (event.classList == "top-left") {
        border.style.borderTopLeftRadius = `${value}px`
    } else if (event.classList == "top-right") {
        border.style.borderTopRightRadius = `${value}px`
    } else if (event.classList == "bottom-right") {
        border.style.borderBottomRightRadius = `${value}px`
    } else if (event.classList == "bottom-left") {
        border.style.borderBottomLeftRadius = `${value}px`
    }
}

function addToCopy {
    
}