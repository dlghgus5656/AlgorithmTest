function solution(a, b, c, d) {
    const count = {};
    [a, b, c, d].forEach(n => count[n] = (count[n] || 0) + 1);
    
    const freq = Object.entries(count)
        .map(([num, cnt]) => [Number(num), cnt])
        .sort((a, b) => b[1] - a[1]); // 빈도 기준 정렬 (많이 나온 숫자가 먼저)

    if (freq.length === 1) return 1111 * freq[0][0]; // 4개 동일 (p, p, p, p)
    if (freq.length === 2) {
        const [p, pCount] = freq[0], [q, qCount] = freq[1];
        return pCount === 3 ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q);
    }
    if (freq.length === 3) return freq[1][0] * freq[2][0]; // (p, p, q, r)
    
    return Math.min(a, b, c, d); // 모두 다름
}
