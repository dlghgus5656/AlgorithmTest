function solution(number) {
    let answer = 0;
    
    for (let a = 0; a < number.length; a++) {
        const anum = number[a]
        for (let b = a + 1; b < number.length; b++) {
            const bnum = number[b]
            for (let c = b + 1; c < number.length; c++) {
                const cnum = number[c]
                if (anum + bnum + cnum === 0) answer++
            }
        }
    }
    
    return answer;
}

// 1. 배열에서 세 개의 수를 선택하는 모든 조합을 만든다.
// 2. 각각의 조합에 대해 합을 계산한다.
// 3. 합이 0이면 카운트를 증가시킨다.
// 4. 최종 카운트를 반환한다.