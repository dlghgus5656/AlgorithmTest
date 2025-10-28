function solution(s) {
  let count = 0;

  for (const ch of s) {
    if (ch === '(') {
      count++;
    } else {
      count--;
    }

    // 닫는 괄호가 더 많은 경우
    if (count < 0) return false;
  }

  // 모두 닫혔는지 확인
  return count === 0;
}
