function solution(dots) {
    // 모든 점 쌍을 확인하여 평행 여부를 판단
    const combinations = [
        [0, 1, 2, 3], // AB, CD
        [0, 2, 1, 3], // AC, BD
        [0, 3, 1, 2]  // AD, BC
    ];

    for (const [i, j, k, l] of combinations) {
        const [x1, y1] = dots[i];
        const [x2, y2] = dots[j];
        const [x3, y3] = dots[k];
        const [x4, y4] = dots[l];

        // 기울기 비교
        if ((y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1)) {
            return 1; // 평행
        }
    }

    return 0; // 평행하지 않음
}