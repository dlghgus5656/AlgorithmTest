// function solution(ingredient) {
//     const stack = [] // 스택 활용
//     const answerarr = [1, 2, 3, 1]
//     let count = 0 // 포장 햄버거 수
        
//     for (let i = 0; i < ingredient.length; i++) {
//         stack.push(ingredient[i])
//         let length = 4
        
//         if (stack.length >= 4) {
//             const lastFour = stack.slice(-4);
            
//             if (lastFour.every((num, i) => num === answerarr[i])) { // 햄버거 재료 순서 일치한다면
//                     stack.splice(stack.length - 4, 4)
//                     count++
//                 }
//         }
//     }
    
    
//     return count;
// }

function solution(ingredient) {
    let stk = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        stk.push(ingredient[i]);
        if (
            stk[stk.length-1] === 1 &&
            stk[stk.length-2] === 3 &&
            stk[stk.length-3] === 2 &&
            stk[stk.length-4] === 1
        ) {
            count++;
            stk.splice(-4);
        }
    }
    return count;
}