function solution(wallpaper) {
  const height = wallpaper.length; // 행 개수
  const width = wallpaper[0].length; // 열 개수
  
// Infinity = 모든 값보다 큼, 반드시 갱신됨 / 초기값을 0으로 해두면 0보다 큰 값일땐 갱신이 안됨 = 올바른 작동 x
  let minRow = Infinity, minCol = Infinity; // 시작 지점
// -Infinity 또는 -1	모든 값보다 작음, 반드시 갱신됨
  let maxRow = -1, maxCol = -1; // 마지막 지점


  for (let row = 0; row < height; row++) { // 행 반복
    for (let col = 0; col < width; col++) { // 열 반복
      if (wallpaper[row][col] === '#') {
        minRow = Math.min(minRow, row); // 가장 작은 행
        minCol = Math.min(minCol, col); // 가장 작은 열
        maxRow = Math.max(maxRow, row); // 가장 큰 행
        maxCol = Math.max(maxCol, col); // 가장 큰 열
      }
    }
  }

  return [minRow, minCol, maxRow + 1, maxCol + 1]; // 드래그 마지막 지점은 + 1
}
