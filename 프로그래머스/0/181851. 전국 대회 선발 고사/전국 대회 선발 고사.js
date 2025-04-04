function solution(rank, attendance) {
    // 등수와 인덱스를 함께 저장
    const eligible = rank
        .map((r, i) => ({ rank: r, index: i }))
        .filter(student => attendance[student.index]) // 참석 가능한 학생만 필터링
        .sort((a, b) => a.rank - b.rank); // 등수 기준 정렬

    // 선발된 학생들의 인덱스 추출
    const [a, b, c] = [eligible[0].index, eligible[1].index, eligible[2].index];

    return 10000 * a + 100 * b + c;
}
