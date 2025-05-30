function solution(board) {
  const col = board.length;
  const row = board[0].length;
  const visited = Array.from({ length: col }, () => Array(row).fill(false));
  const directions = [
    [0, 1],   // 오른쪽
    [1, 0],   // 아래
    [0, -1],  // 왼쪽
    [-1, 0]   // 위
  ];

  let start, goal;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 'R') start = [i, j];
      if (board[i][j] === 'G') goal = [i, j];
    }
  }

  const queue = [[...start, 0]];
  visited[start[0]][start[1]] = true;
    
  while (queue.length) {
    const [x, y, moves] = queue.shift();

    if (x === goal[0] && y === goal[1]) return moves;

    for (const [dx, dy] of directions) {
      let nx = x;
      let ny = y;

      // 벽이나 장애물에 닿을 때까지 이동
      while (
        nx + dx >= 0 && nx + dx < col &&
        ny + dy >= 0 && ny + dy < row &&
        board[nx + dx][ny + dy] !== 'D'
      ) {
        nx += dx;
        ny += dy;
      }

      if (!visited[nx][ny]) { // false -> true로 수정
        visited[nx][ny] = true;
        queue.push([nx, ny, moves + 1]);
      }
    }
  }
  return -1;
}
