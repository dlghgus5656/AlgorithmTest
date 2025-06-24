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