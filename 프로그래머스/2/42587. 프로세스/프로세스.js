function solution(priorities, location) {
  const queue = priorities.map((priority, index) => [priority, index]);
  let count = 0;

  while (queue.length > 0) {
    const [priority, index] = queue.shift();

    // 큐 안에 더 높은 우선순위가 있는지 확인
    const hasHigherPriority = queue.some(item => item[0] > priority);

    if (hasHigherPriority) {
      // 더 높은 우선순위가 있으면 다시 뒤로 보냄
      queue.push([priority, index]);
    } else {
      // 실행
      count++;

      // 실행된 프로세스가 우리가 찾던 위치라면 종료
      if (index === location) {
        return count;
      }
    }
  }
}
