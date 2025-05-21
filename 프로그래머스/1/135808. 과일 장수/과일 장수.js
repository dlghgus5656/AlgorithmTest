function solution(k, m, score) {
    const scoreSort = score.sort((a, b) => b - a);
    
    let sum = 0
    
    for (let i = 0; i < score.length; i += m) {
        const scoreSlice = scoreSort.slice(i, i + m)
        
        if (scoreSlice.length === m) {
            sum += Math.min(...scoreSlice) * m
        }
    }
    
    return sum;
}