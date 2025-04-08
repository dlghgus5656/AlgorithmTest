function solution(arr, k) {
    const answer = arr
    
   for(let i = 0; i < answer.length; i++) {
       if(k % 2 !== 0) {
           answer[i] *= k
       } else {
           answer[i] += k
       }
   }
    return answer;
}

// function solution(arr, k) {
//     const answer = arr.map((num) => k % 2 === 0 ? num + k : num * k)
    
//     return answer;
// }