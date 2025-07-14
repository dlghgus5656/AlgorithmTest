// function solution(dartResult) {
//     const regex = /(\d{1,2})([SDT])([*#]?)/g;
//     const matches = [...dartResult.matchAll(regex)]; // ex) ['2D*', '2', 'D', '*']

//     const answer = [];

//     matches.forEach(([_, num, bonus, option]) => {
//         num = Number(num);
//         const pow = bonus === 'S' ? 1 : bonus === 'D' ? 2 : 3;
//         let score = num ** pow;

//         if (option === '*') {
//             if (answer.length > 0) answer[answer.length - 1] *= 2; // 이전 점수도 *2
//             score *= 2;
//         } else if (option === '#') {
//             score *= -1;
//         }

//         answer.push(score);
//     });

//     return answer.reduce((a, b) => a + b, 0);
// }
function singlePoint(stack) {
    if (stack.length > 0) {
        const point = Math.pow(stack.pop(), 1)
        stack.push(point)

        return true
    }
    return false
}
function doublePoint(stack) {
    if (stack.length > 0) {
        const point = Math.pow(stack.pop(), 2)
        stack.push(point)

        return true
    }
    return false
}
function triplePoint(stack) {
    if (stack.length > 0) {
        const point = Math.pow(stack.pop(), 3)
        stack.push(point)

        return true
    }
    return false
}
function star(stack) {
    if (stack.length > 0){
        const point = stack.pop() * 2

        if (stack.length >= 1) {
            const prevPoint = stack.pop() * 2
            stack.push(prevPoint)
        }

        stack.push(point)

        return true
    }
    return false
}
function acha(stack) {
    if (stack.length > 0) {
        const point = stack.pop() * -1
        stack.push(point)
        return true
    }
    return false
}

const operators = {
    'S': singlePoint,
    'D': doublePoint,
    'T': triplePoint,
    '*': star,
    '#': acha
}
function isOperator(character) {
    return operators[character]
}
function solution(dartResult) {
    var answer = 0
    const stack = []

    for (let i = 0; i < dartResult.length; i++) {

        const number = parseInt(dartResult.slice(i))

        if (Number.isInteger(number)) {
            stack.push(number)
            i += (number.toString().length - 1)
        } else {
            const operator  = isOperator(dartResult.charAt(i))
            operator(stack)
        }
    }
    console.log(stack)
    answer = stack.reduce((accumulator, currentValue) => accumulator + currentValue)
    return answer
}