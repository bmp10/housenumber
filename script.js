let input = document.createElement('input')
input.type = 'number'
document.body.appendChild(input)
let output = document.createElement('p')
document.body.appendChild(output)

input.oninput = function() {
    output.innerText = parseInt(input.value) % 80
}