let input = document.createElement('input')
input.type = 'number'
document.body.appendChild(input)
let output = document.createElement('p')
document.body.appendChild(output)

input.oninput = function() {
    let val = parseInt(input.value)
    let sumofdigits = val
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    
    let rem = val % 80
    let sumsum = sumofdigits + rem

    output.innerText = rem + '\n' + sumofdigits + '\n' + sumsum
}
input.style.fontSize = "50px"
output.style.fontSize = "50px"
