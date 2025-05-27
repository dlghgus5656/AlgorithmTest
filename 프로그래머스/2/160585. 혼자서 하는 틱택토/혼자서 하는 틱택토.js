function solution(board) {
  const count = { O: 0, X: 0 };

  // 문자 개수 카운트
  for (const row of board) {
    for (const char of row) {
      if (char === 'O') count.O++;
      if (char === 'X') count.X++;
    }
  }

 // 승리 여부 체크
  const win = (symbol) => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) return true; // 가로 빙고
      if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) return true; // 세로 빙고
    }
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) return true; // 대각선 빙고 - 좌측 ~ 우측
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) return true; // 대각선 빙고 - 우측 ~ 좌측
    return false;
  };

 // true or false
  const oWins = win('O');
  const xWins = win('X');

// 나올 수 없는 게임 상황
  if (count.X > count.O) return 0;
  if (count.O > count.X + 1) return 0; // O가 X보다 2이상 클때
  if (oWins && count.O !== count.X + 1) return 0;
  if (xWins && count.O !== count.X) return 0;
  if (oWins && xWins) return 0;

  return 1;
}
