function solution(picture, k) {
    const result = [];

    for (const row of picture) {
        // 가로 확장
        const expandedRow = [...row].map(char => char.repeat(k)).join('');
        
        // 세로 확장
        for (let i = 0; i < k; i++) {
            result.push(expandedRow);
        }
    }

    return result;
}
