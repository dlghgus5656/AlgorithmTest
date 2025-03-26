function solution(quiz) {
    return quiz.map(expression => {
        // 공백으로 분리
        const [X, operator, Y, equalSign, Z] = expression.split(' ');
        
        const numX = Number(X);
        const numY = Number(Y);
        const numZ = Number(Z);
        
        // 계산
        let result;
        if (operator === '+') {
            result = numX + numY;
        } else if (operator === '-') {
            result = numX - numY;
        }
        
        return result === numZ ? "O" : "X";
    });
}