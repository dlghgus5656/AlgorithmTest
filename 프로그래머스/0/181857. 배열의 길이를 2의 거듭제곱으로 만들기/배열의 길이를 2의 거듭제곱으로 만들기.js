function solution(arr) {
 const answer = [...arr]; // 불변성을 유지
    
    while ((answer.length & (answer.length - 1)) !== 0) {
        answer.push(0)
    }
    
    return answer;
}