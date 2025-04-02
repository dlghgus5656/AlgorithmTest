function solution(strArr) {
    const countMap = new Map();

    // 문자열 길이를 기준으로 그룹화
    for (const str of strArr) {
        const len = str.length;
        countMap.set(len, (countMap.get(len) || 0) + 1);
    }

    // 가장 큰 그룹의 크기 반환
    return Math.max(...countMap.values());
}
