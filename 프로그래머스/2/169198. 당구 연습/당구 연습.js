// function solution(m, n, startX, startY, balls) {
//     const answer = [];
    
//     for (const [targetX, targetY] of balls) {
//         const candidates = [];
   
    
//     // 4방향 반사 좌표
//     const mirrors = [
//         [-targetX, targetY], // 왼쪽 벽
//         [2 * m - targetX, targetY], // 오른쪽 벽
//         [targetX, -targetY], // 아래 벽
//         [targetX, 2 * n - targetY] // 위쪽 벽
//     ];
    
//     for (const [mx, my] of mirrors) {
//         const dx = startX - mx;
//         const dy = startY - my;
        
//             // 예외 처리: 시작점과 목표 공이 특정 벽에 대해 일직선 상에 있고,
//             // 그 벽으로 반사되는 경로가 실제로는 직진하여 목표 공을 지나치는 경우
//             if (
//                 // 왼쪽 벽 반사 (x=0) 예외: 시작점과 목표점이 y좌표 같고, startX > targetX 일 때
//                 (mx === -targetX && my === targetY && startY === targetY && startX > targetX) ||
//                 // 오른쪽 벽 반사 (x=m) 예외: 시작점과 목표점이 y좌표 같고, startX < targetX 일 때
//                 (mx === 2 * m - targetX && my === targetY && startY === targetY && startX < targetX) ||
//                 // 아래쪽 벽 반사 (y=0) 예외: 시작점과 목표점이 x좌표 같고, startY > targetY 일 때
//                 (mx === targetX && my === -targetY && startX === targetX && startY > targetY) ||
//                 // 위쪽 벽 반사 (y=n) 예외: 시작점과 목표점이 x좌표 같고, startY < targetY 일 때
//                 (mx === targetX && my === 2 * n - targetY && startX === targetX && startY < targetY)
//             ) {
//                 continue; // 해당 경로는 제외
//             }
//             candidates.push(dx * dx + dy * dy);
//         }
//         answer.push(Math.min(...candidates));
//     }
    
//     return answer;
// }


3
4
5
6
7
8
9
10
11
12
13
14
15
16
function solution(m, n, startX, startY, balls) {
  const answer = [];
  for (const ball of balls) {
    const length = [];
    const x = ball[0];
    const y = ball[1];
    if (!(y === startY && x < startX)) length.push((x + startX) ** 2 + (y - startY) ** 2);
    if (!(y === startY && x > startX)) length.push((m * 2 - x - startX) ** 2 + (y - startY) ** 2);
    if (!(x === startX && y > startY)) length.push((x - startX) ** 2 + (n * 2 - y - startY) ** 2);
    if (!(x === startX && y < startY)) length.push((x - startX) ** 2 + (y + startY) ** 2);
    answer.push(Math.min(...length));
  }
  return answer;
}