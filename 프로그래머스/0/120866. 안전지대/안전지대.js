function solution(board) {
    const n = board.length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // 위, 위-왼쪽, 위-오른쪽
        [0, -1],          [0, 1],    // 왼쪽, 오른쪽
        [1, -1], [1, 0], [1, 1]      // 아래-왼쪽, 아래, 아래-오른쪽
    ];
    // 위험 지역 표시
    const dangerBoard = Array.from({ length: n }, () => Array(n).fill(0)); // 초기값 0으로 생성

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) { // 지뢰가 있는 경우
                dangerBoard[i][j] = 1; // 현재 위치를 위험 지역으로 표시
                // 인접한 위험 지역 표시
                for (const [dx, dy] of directions) {
                    const newX = i + dx;
                    const newY = j + dy;
                    // 범위 체크
                    if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
                        dangerBoard[newX][newY] = 1;
                    }
                }
            }
        }
    }

    // 안전 지역 수 계산
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dangerBoard[i][j] === 0 && board[i][j] === 0) {
                safeCount++;
            }
        }
    }

    return safeCount;
}