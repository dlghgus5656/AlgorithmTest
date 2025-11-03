function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과 시간
  let bridge = Array(bridge_length).fill(0); // 다리 상태
  let currentWeight = 0; // 현재 다리 위 무게

  while (truck_weights.length > 0 || currentWeight > 0) {
    time++;

    // 다리 맨 앞 트럭이 빠짐
    currentWeight -= bridge.shift();

    // 다음 트럭이 다리에 올라갈 수 있으면 진입
    if (truck_weights.length > 0) {
      if (currentWeight + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift();
        bridge.push(nextTruck);
        currentWeight += nextTruck;
      } else {
        // 무게 초과면 빈 공간 유지
        bridge.push(0);
      }
    } else {
      // 대기 트럭 없으면 빈 공간 유지
      bridge.push(0);
    }
  }

  return time;
}

