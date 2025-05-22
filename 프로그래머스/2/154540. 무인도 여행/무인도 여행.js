function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const result = [];

  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ];

  function dfsIterative(x, y) {
    let stack = [[x, y]];
    visited[x][y] = true;
    let total = parseInt(maps[x][y]);

    while (stack.length > 0) {
      const [cx, cy] = stack.pop(); // 마지막 값을 반환, stack에는 마지막 값 제거됨

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (
          nx >= 0 && nx < rows &&
          ny >= 0 && ny < cols &&
          !visited[nx][ny] &&
          maps[nx][ny] !== 'X'
        ) {
          visited[nx][ny] = true;
          total += parseInt(maps[nx][ny]);
          stack.push([nx, ny]);
        }
      }
    }

    return total;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && maps[i][j] !== 'X') {
        result.push(dfsIterative(i, j));
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
