// function solution(n) {
//     let answer = [];
    
//     for(let i = 0; i < n; i++) {
//          let numArr = []
        
//         for(let j = 0; j < n; j++){
//             numArr.push(
//             i === j ? 1 : 0)
//         }
//         answer.push(numArr)
//     }
    
//     return answer;
// }
function solution(n) {
    const answer = new Array(n);
    for (let i = 0; i < n; i++) {
        const row = new Array(n).fill(0);
        row[i] = 1;
        answer[i] = row;
    }
    return answer;
}
