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
    let score = (concatted.match(/6|7|8/g) || []).length

    rem = rem.toString()
    sum = sum.toString()
    sumsum = sumsum.toString()

    if (rem.includes('4')) {
        if (rem == '46' || rem == '48') score += 1
        else return [0, 0, 0, -1]
    }

    if (sum.includes('4')) {
        if (sum == '46' || sum == '48') score += 1
        else return [0, 0, 0, -1]
    }

    if (sumsum.includes('4')) {
        if (sumsum.includes('46') || sumsum.includes('48')) score += 1
        else return [0, 0, 0, -1]
    }
        

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

    output.innerText = (val % 80) + '\nmax score: ' + goods[goods.length - 1][0][1] + '\n\n' + rem + '\n' + sum + '\n' + sumsum + '\n' + goods[goods.length - 1].map(x => x[0] + ' _ ' + x[2].join(' ')).join('\n')
}
input.style.fontSize = "50px"
output.style.fontSize = "50px"

/*
6 7 8 are good

4 is only ok when immediately followed by a 6 or 8 (46 or 48)
all other 4s are big nonos

168 in the sum sum is a big yes yesyesyesyes
*/
