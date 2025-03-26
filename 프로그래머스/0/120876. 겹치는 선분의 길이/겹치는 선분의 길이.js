function solution(lines) {
    // 선분의 시작과 끝을 정렬하여 각 선분의 범위를 설정
    const points = [];
    
    lines.forEach(line => {
        const [start, end] = line;
        points.push([start, 'start']);
        points.push([end, 'end']);
    });

    // 시작점과 끝점을 정렬
    points.sort((a, b) => {
        // 같은 위치에서는 'start'가 'end'보다 우선
        if (a[0] === b[0]) {
            return a[1] === 'start' ? -1 : 1;
        }
        return a[0] - b[0]; // 위치에 따라 오름차순 정렬
    });

    let overlapCount = 0; // 겹치는 선분의 개수
    let lastPosition = null; // 마지막 위치
    let totalOverlapLength = 0; // 총 겹치는 길이

    points.forEach(([position, type]) => {
        if (lastPosition !== null && overlapCount > 1) {
            totalOverlapLength += position - lastPosition; // 총 겹치는 길이를 계속 더해줌
        }

        // 시작점인 경우
        if (type === 'start') {
            overlapCount++; // 겹치는 선분 개수 증가
        } else { // 끝점인 경우
            overlapCount--; // 겹치는 선분 개수 감소
        }

        lastPosition = position; // 현재 위치를 저장
        // position은 forEach 메서드의 콜백 함수에서 구조 분해 할당을 통해 자동으로 생성되는 변수
        // 이 변수는 points 배열의 각 요소에서 첫 번째 값을 가져와 할당
    });

    return totalOverlapLength;
}