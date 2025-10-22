function solution(clothes) {
  const map = new Map();

  // 종류별 옷 분류
  for (const [name, type] of clothes) {
    if (!map.has(type)) map.set(type, []);
    map.get(type).push(name); // {type: [기존 값 유지 + ...], type2: [...], ...}
  }

  // 경우의 수 계산
  let result = 1;
  for (const [_, items] of map) {
    // 수학 공식 -> 경우의 수 = (a + 1) * (b + 1) ... 
    result *= (items.length + 1); // 입거나, 안 입거나
  }

  // 모든 종류를 안 입는 경우 제외 = -1
  return result - 1;
}


// 의상 종류별로 분류 (Map 사용)
// 각 종류의 선택지 개수 계산 (입거나 / 안 입거나)
// 모든 종류를 곱해서 경우의 수 구하기
// 아무것도 안 입는 경우(빈 조합) 제거