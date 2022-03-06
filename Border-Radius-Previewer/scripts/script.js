const output = document.querySelector("div.output")
const border = document.querySelector("div.border")
const inputs = document.querySelectorAll("input")

inputs.forEach(element => {
    element.addEventListener("change", (event) => {
        const value = element.value
        changeBorder(value, event.target)
    })
})

function changeBorder(value, event) {
    if (event.classList == "top-left") {
        border.style.borderTopLeftRadius = `${value}px`
        addToCopy("leftTop", value, event.classList)
    } else if (event.classList == "top-right") {
        border.style.borderTopRightRadius = `${value}px`
        addToCopy("topRight", value, event.classList)
    } else if (event.classList == "bottom-right") {
        border.style.borderBottomRightRadius = `${value}px`
        addToCopy("bottomRight", value, event.classList)
    } else if (event.classList == "bottom-left") {
        border.style.borderBottomLeftRadius = `${value}px`
        addToCopy("bottomLeft", value, event.classList)
    }
}

function addToCopy(outputParagraph, value, whatClass) {
    var where = document.querySelector(`.${outputParagraph}`)

    console.log(where)
    console.log(whatClass)

    where.innerText = `border-${whatClass}-radius: ${value}px;`
}