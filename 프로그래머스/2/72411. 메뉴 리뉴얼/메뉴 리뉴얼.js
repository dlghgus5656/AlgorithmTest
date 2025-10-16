function solution(orders, course) {
  // 결과 저장 배열
  const result = [];

  // 조합 함수: 재귀적으로 k개를 뽑는 모든 조합 생성
  function getCombinations(arr, k) {
    const results = [];
    if (k === 1) return arr.map(v => [v]);
    arr.forEach((fixed, i, origin) => {
      const rest = origin.slice(i + 1);
    // k는 매개변수의 독립성 특성으로 인해 새로운 스코프에 복사됨
    // 즉 부모 k는 변하지 않음
    // 각 재귀 호출마다 자신만의 k값을 복사해서 가짐
    // 즉, 원래 k는 유지되고, 호출된 함수 안에서만 k-1로 줄어듬
      const combinations = getCombinations(rest, k - 1); 
      const attached = combinations.map(c => [fixed, ...c]);
      results.push(...attached);
    });
    return results;
  }

  // 각 course(코스 길이)별로 반복
  for (const c of course) {
    const menuCount = new Map(); // 조합별 등장 횟수

    for (const order of orders) {
      const sorted = order.split('').sort(); // 정렬 (일관성 유지)
      const combinations = getCombinations(sorted, c); // 조합 생성

      combinations.forEach(combo => {
        const menu = combo.join(''); // 배열 → 문자열
        menuCount.set(menu, (menuCount.get(menu) || 0) + 1);
      });
    }

    // 해당 코스 길이에서 가장 많이 주문된 횟수 찾기
    const maxOrder = Math.max(...menuCount.values(), 0);

    // 조건: 2명 이상 주문 + 최대 빈도 조합만 결과에 포함
    for (const [menu, count] of menuCount) {
      if (count === maxOrder && count >= 2) {
        result.push(menu);
      }
    }
  }

  // 결과를 사전순 정렬 후 반환
  return result.sort();
}
