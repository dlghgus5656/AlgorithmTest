function solution(answers) {
    // 1, 2, 3 수포자
    const answerOne = [1, 2, 3, 4, 5];
    const answerTwo = [2, 1, 2, 3, 2, 4, 2, 5]
    const answerThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let one = 0
    let two = 0
    let three = 0
    
    let count = 0
    
        for (const answer of answers) { // 정답 점수 누적
            if (answerOne[count % answerOne.length] === answer) one++
            if (answerTwo[count % answerTwo.length] === answer) two++
            if (answerThree[count % answerThree.length] === answer) three++
            
            count++
        }
 
    const max = Math.max(one, two, three) // 가장 큰 점수
    
    const result = [one, two, three]
        .map((num, i) => [num, i + 1]) // [점수, 수포자 번호]
        .filter(([score]) => score === max) // 점수 === max
        .map(([_, i]) => i) // 남아있는 수포자 번호 / 2, 3번 수포자가 남아있을 경우도 정상 처리
        
    return result;
}