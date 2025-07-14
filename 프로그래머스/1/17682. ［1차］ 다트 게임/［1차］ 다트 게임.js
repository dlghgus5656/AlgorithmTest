function solution(dartResult) {
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    const matches = [...dartResult.matchAll(regex)]; // ex) ['2D*', '2', 'D', '*']

    const answer = [];

    matches.forEach(([_, num, bonus, option]) => {
        num = Number(num);
        const pow = bonus === 'S' ? 1 : bonus === 'D' ? 2 : 3;
        let score = num ** pow;

        if (option === '*') {
            if (answer.length > 0) answer[answer.length - 1] *= 2; // 이전 점수도 *2
            score *= 2;
        } else if (option === '#') {
            score *= -1;
        }

        answer.push(score);
    });

    return answer.reduce((a, b) => a + b, 0);
}
