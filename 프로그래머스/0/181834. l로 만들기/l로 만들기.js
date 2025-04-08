function solution(myString) {
    const result = [];
    for (let i = 0; i < myString.length; i++) {
        result.push(myString[i] < 'l' ? 'l' : myString[i]);
    }
    return result.join('');
}

// function solution(myString) {
//     return [...myString]
//         .map(char => char < 'l' ? 'l' : char)
//         .join('');
// }
