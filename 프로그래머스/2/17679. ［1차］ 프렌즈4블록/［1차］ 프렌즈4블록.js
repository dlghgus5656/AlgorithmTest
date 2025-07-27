function solution(m, n, board) {
    board = board.map(row => row.split(''));
    let totalRemoved = 0;

    while (true) {
        let toDelete = Array.from({ length: m }, () => Array(n).fill(false)); // 제거할 블록 배열
        let hasDeletion = false;

        // 1. 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = board[i][j];
                if (block === ' ') continue;
                if (
                    block === board[i][j + 1] && // 오른쪽
                    block === board[i + 1][j] && // 아래
                    block === board[i + 1][j + 1] // 대각선 아래
                ) {
                    toDelete[i][j] = true;
                    toDelete[i][j + 1] = true;
                    toDelete[i + 1][j] = true;
                    toDelete[i + 1][j + 1] = true;
                    hasDeletion = true;
                }
            }
        }

        if (!hasDeletion) break;

        // 2. 블록 제거 및 카운트
        let removed = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (toDelete[i][j]) {
                    board[i][j] = ' ';
                    removed++;
                }
            }
        }
        totalRemoved += removed;

        // 3. 블록 아래로 떨어뜨리기 (최적화 버전)
        for (let j = 0; j < n; j++) {
            let writeIdx = m - 1;
            for (let i = m - 1; i >= 0; i--) { // 역순, 아래에서 위로 스캔
                if (board[i][j] !== ' ') {
                    board[writeIdx][j] = board[i][j];
                    if (writeIdx !== i) board[i][j] = ' ';
                    writeIdx--;
                }
            }
            while (writeIdx >= 0) {
                board[writeIdx][j] = ' ';
                writeIdx--;
            }
        }
    }

    return totalRemoved;
}
