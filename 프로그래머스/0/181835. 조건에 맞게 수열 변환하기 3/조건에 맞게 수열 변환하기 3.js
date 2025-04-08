function solution(arr, k) {
    const result = new Array(arr.length); // 미리 배열 크기 확보

    if (k % 2 === 1) {
        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i] * k;
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i] + k;
        }
    }

    return result;
}

// function solution(arr, k) {
//     const answer = arr
    
//    for(let i = 0; i < answer.length; i++) {
//        if(k % 2 !== 0) {
//            answer[i] *= k
//        } else {
//            answer[i] += k
//        }
//    }
//     return answer;
// }


// function solution(arr, k) {
//     const answer = arr.map((num) => k % 2 === 0 ? num + k : num * k)
    
//     return answer;
// }