function solution(park, routes) {
    const height = park.length;            // 공원의 세로 길이 (행 개수)
    const width = park[0].length;          // 공원의 가로 길이 (열 개수)

    const directionMap = {                 // 방향 별 이동 벡터
        N: [-1, 0],  // 위쪽 한 칸
        S: [1, 0],   // 아래쪽 한 칸
        W: [0, -1],  // 왼쪽 한 칸
        E: [0, 1]    // 오른쪽 한 칸
    };

    let posY = 0, posX = 0;                // 로봇 강아지의 현재 위치

    // 1. 시작 위치 'S' 찾기
    for (let row = 0; row < height; row++) {
        const col = park[row].indexOf('S');
        if (col !== -1) {
            posY = row;
            posX = col;
            break;
        }
    }

    // 2. 명령어 순회
    for (const route of routes) {
        const [direction, distanceStr] = route.split(' ');
        const [dy, dx] = directionMap[direction]; // 이동 방향
        const distance = parseInt(distanceStr);   // 이동 거리

        let nextY = posY;
        let nextX = posX;
        let canMove = true;

        // 3. 이동 경로 확인
        for (let step = 1; step <= distance; step++) {
            const moveY = posY + dy * step;
            const moveX = posX + dx * step;

            // 4. 공원을 벗어나거나 장애물을 만나면 중단
            if (
                moveY < 0 || moveX < 0 ||
                moveY >= height || moveX >= width ||
                park[moveY][moveX] === 'X'
            ) {
                canMove = false;
                break;
            }
        }

        // 5. 이동 가능한 경우, 위치 갱신
        if (canMove) {
            posY += dy * distance;
            posX += dx * distance;
        }
    }

    return [posY, posX]; // 최종 위치 반환
}
