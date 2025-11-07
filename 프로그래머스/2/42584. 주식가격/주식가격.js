function solution(prices) {
  const n = prices.length;
  const answer = Array(n).fill(0);
  const stack = []; // [index, price]

  for (let i = 0; i < n; i++) {
    // 현재 가격이 이전보다 작으면 떨어진 시점 계산
    while (stack.length > 0 && prices[i] < stack[stack.length - 1][1]) {
      const [prevIndex, prevPrice] = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    // 현재 시점 push
    stack.push([i, prices[i]]);
  }

  // 끝까지 떨어지지 않은 가격 처리
  while (stack.length > 0) {
    const [index, _] = stack.pop();
    answer[index] = n - 1 - index;
  }

  return answer;
}
