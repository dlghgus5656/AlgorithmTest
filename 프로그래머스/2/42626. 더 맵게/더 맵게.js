function solution(scoville, K) {
  // 최소 힙 삽입 함수
  function push(heap, val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2); // 부모 노드
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }

  // 최소 힙 추출 함수
  function pop(heap) {
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      const l = i * 2 + 1, r = i * 2 + 2;
      let s = i;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[i], heap[s]] = [heap[s], heap[i]];
      i = s;
    }
    return top;
  }

  // 최소 힙 초기화
  const heap = [];
  scoville.forEach(v => push(heap, v));

  let count = 0;

  while (heap[0] < K) {
    if (heap.length < 2) return -1;
    const a = pop(heap);
    const b = pop(heap);
    push(heap, a + b * 2);
    count++;
  }

  return count;
}
