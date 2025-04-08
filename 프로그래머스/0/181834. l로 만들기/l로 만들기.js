function solution(myString) {
    const result = new Array(myString.length);
    for (let i = 0; i < myString.length; i++) {
        // result.push(myString[i] < 'l' ? 'l' : myString[i]);
        result[i] = myString[i] < 'l' ? 'l' : myString[i]
    }
    return result.join('');
}

// function solution(myString) {
//     return [...myString]
//         .map(char => char < 'l' ? 'l' : char)
//         .join('');
// }
