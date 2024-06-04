let input = document.createElement('input')
input.type = 'number'
document.body.appendChild(input)
let output = document.createElement('p')
document.body.appendChild(output)

function getRatings(val) {
    let sum = val
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    
    let rem = val % 80
    let sumsum = sum + rem

    const concatted = '' + rem + sum + sumsum
    const score = (concatted.match(/4/g) || []).length ? -1 :
        (concatted.match(/6|7|8/g) || []).length
        

    return [rem, sum, sumsum, score]
}

const goods = []

input.oninput = function() {
    const val = parseInt(input.value)
    const ratings = getRatings(val)
    const rem = ratings[0]
    const sum = ratings[1]
    const sumsum = ratings[2]
    const score = ratings[3]

    let goods = []

    for (let i = 0; i < 1000; i++) {
        const v = val * 1000 + i
        const ratings = getRatings(v)
        while (goods.length <= ratings[3] + 1) {
            goods.push([])
        }
        goods[ratings[3] + 1].push([v, ratings[3], [ratings[0], ratings[1], ratings[2]]])
    }

    output.innerText = 'max score: ' + goods[goods.length - 1][0][1] + '\n\n' + rem + '\n' + sum + '\n' + sumsum + '\n' + goods[goods.length - 1].map(x => x[0] + ' _ ' + x[2].join(' ')).join('\n')
}
input.style.fontSize = "50px"
output.style.fontSize = "50px"
