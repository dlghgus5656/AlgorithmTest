function solution(n, t, m, p) {
    const answer = [];
    let sequence = ""; // 모든 사람이 말할 전체 숫자
    let number = 0; // 현재 변환할 숫자

    while (sequence.length < t * m) {
        sequence += number.toString(n);
        number++;
    }
    
    for (let i = 0; i < sequence.length; i++) {
        if (i % m === p - 1) answer.push(sequence[i]); // 튜브가 말할 차례
        if (answer.length === t) break;
    }

    return answer.join("").toUpperCase();
}
