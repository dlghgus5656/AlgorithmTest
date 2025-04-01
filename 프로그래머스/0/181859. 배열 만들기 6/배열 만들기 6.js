// function solution(arr) {
//     const answer = arr.reduce((acc, cur, i) => {
//         if(acc === []) {
//             acc.push(cur)
//         } else if(acc[acc.length - 1] === cur){
//             acc.pop()
//         } else {
//             acc.push(cur)
//         }
//         return acc
//     },[])
    
//     return answer.length === 0 ? [-1] : answer;
// }
function solution(arr) {
    const stk = [];
    let i = 0;

    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else if (stk[stk.length - 1] === arr[i]) {
            stk.pop();
            i++;
        } else {
            stk.push(arr[i]);
            i++;
        }
    }

    return stk.length === 0 ? [-1] : stk;
}