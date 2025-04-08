function solution(myString) {
    // const result = []
    const result = new Array(myString.length);
    for (let i = 0; i < myString.length; i++) {
        // result.push(myString[i] < 'l' ? 'l' : myString[i]);
        result[i] = myString[i] < 'l' ? 'l' : myString[i]
    }
    return result.join('');
}

// function solution(myString) {
//     const result = new Array(myString.length);
//     const lCode = 'l'.charCodeAt(0);

//     for (let i = 0; i < myString.length; i++) {
//         const code = myString.charCodeAt(i);
//         result[i] = code < lCode ? 'l' : myString[i];
//     }

//     return result.join('');
// }

// function solution(myString) {
//     var answer = [...myString].map((str) => str.charCodeAt() < "l".charCodeAt() ? "l" : str ).join("");
//     return answer;
// }

// function solution(myString) {
//     return [...myString]
//         .map(char => char < 'l' ? 'l' : char)
//         .join('');
// }



