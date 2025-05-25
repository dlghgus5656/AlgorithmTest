function solution(maps) {
  // 미로의 크기와 2차원 배열 형태로 변환 준비
  const rowCount = maps.length;
  const colCount = maps[0].length;
  const grid = maps.map(row => row.split(''));
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  // BFS (너비 우선 탐색) 함수 정의: 시작점에서 목표까지의 최단 거리 계산
  const bfs = (start, targetChar) => {
    const queue = [[...start, 0]];
    const visited = Array.from({ length: rowCount }, () => Array(colCount).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();
      if (grid[x][y] === targetChar) return dist;

      for (const [dx, dy] of directions) {
        const nextX = x + dx;
        const nextY = y + dy;

        if (
          nextX >= 0 && nextY >= 0 &&
          nextX < rowCount && nextY < colCount &&
          !visited[nextX][nextY] &&
          grid[nextX][nextY] !== 'X'
        ) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY, dist + 1]);
        }
      }
    }
    return -1;
  };

  // 시작점('S'), 레버('L'), 출구('E') 위치 찾기
  let start, lever, exit;
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (grid[row][col] === 'S') start = [row, col];
      else if (grid[row][col] === 'L') lever = [row, col];
      else if (grid[row][col] === 'E') exit = [row, col];
    }
  }

  // 시작점에서 레버까지, 레버에서 출구까지 최단 거리 계산 및 최종 결과 반환
  const toLever = bfs(start, 'L');
  const toExit = bfs(lever, 'E');
  return toLever === -1 || toExit === -1 ? -1 : toLever + toExit;
}
