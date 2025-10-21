function solution(phone_book) {
  const map = new Map();

  // 모든 번호 Map에 저장
  for (const num of phone_book) {
    map.set(num, true);
  }

  // 각 번호의 접두어를 탐색
  for (const num of phone_book) {
    let prefix = "";
    for (let i = 0; i < num.length - 1; i++) { // 접두어 탐색이므로 length - 1
      prefix += num[i];
      if (map.has(prefix)) return false;
    }
  }

  return true;
}
