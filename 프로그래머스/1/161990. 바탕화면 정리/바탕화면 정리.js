function solution(wallpaper) {
    const height = wallpaper.length;      // 바탕화면 세로 길이 (행 개수)
    const width = wallpaper[0].length;    // 바탕화면 가로 길이 (열 개수)
    
    let arrNums = [] // 파일 위치 배열

    const result = [] // 결과 저장

    // 파일들 위치 찾기
    for (let row = 0; row < height; row++) { // 행 반복
      const line = wallpaper[row];
      for (let col = 0; col < line.length; col++) { // 파일의 열 위치 찾기
        if (line[col] === '#') { // 찾았다면 행과 열 push
          arrNums.push([row, col]);
        }
      }
    }
    // 드래그 지점을 생각하며 필요한 값 구하기
    const Srow = arrNums.reduce((minRow, cur) => cur[0] < minRow[0] ? cur : minRow)[0]; // 가장 작은 행
    const Scol = arrNums.reduce((minCol, cur) => cur[1] < minCol[1] ? cur : minCol)[1]; // 가장 작은 열
    const Erow = arrNums.reduce((maxRow, cur) => cur[0] > maxRow[0] ? cur : maxRow)[0]; // 가장 큰 행
    const Ecol = arrNums.reduce((maxCol, cur) => cur[1] > maxCol[1] ? cur : maxCol)[1]; // 가장 큰 열
    
    result.push(Srow, Scol, Erow + 1, Ecol + 1) // 드래그 끝 지점은 + 1씩

    return result;
}