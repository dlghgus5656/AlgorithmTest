function solution(n) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
         let numArr = []
        
        for(let j = 0; j < n; j++){
            numArr.push(
            i === j ? 1 : 0)
        }
        answer.push(numArr)
    }
    
    return answer;
}