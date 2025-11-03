// function solution(bridge_length, weight, truck_weights) {
//   let time = 0; // 경과 시간
//   let bridge = Array(bridge_length).fill(0); // 다리 상태
//   let currentWeight = 0; // 현재 다리 위 무게

//   while (truck_weights.length > 0 || currentWeight > 0) {
//     time++;

//     // 다리 맨 앞 트럭이 빠짐
//     currentWeight -= bridge.shift();

//     // 다음 트럭이 다리에 올라갈 수 있으면 진입
//     if (truck_weights.length > 0) {
//       if (currentWeight + truck_weights[0] <= weight) {
//         const nextTruck = truck_weights.shift();
//         bridge.push(nextTruck);
//         currentWeight += nextTruck;
//       } else {
//         // 무게 초과면 빈 공간 유지
//         bridge.push(0);
//       }
//     } else {
//       // 대기 트럭 없으면 빈 공간 유지
//       bridge.push(0);
//     }
//   }
    
// // 필요한 데이터
// // - 경과 시간(time): 매초 증가하며, 트럭이 다리를 모두 건널 때까지 카운트
// // - 현재 다리 상태(bridge): 다리 길이만큼의 배열로, 각 칸은 트럭 무게 또는 0
// // - 현재 다리 위 총 무게(currentWeight): 다리 위 트럭들의 무게 합
// // - 대기 트럭 큐(truck_weights): 아직 다리에 진입하지 않은 트럭들

// // 동작 과정
// // 1. 매초마다 time을 1 증가시킨다.
// // 2. 다리 맨 앞 칸에서 트럭(또는 빈칸)을 제거해 다리를 한 칸 이동시킨다.
// //    → 제거된 트럭의 무게는 currentWeight에서 빼준다.
// // 3. 대기 중인 트럭이 있고, 다리 위 무게 + 다음 트럭 무게 <= 최대 하중이라면
// //    → 다음 트럭을 다리에 진입시킨다.
// //    → bridge의 끝에 트럭 무게를 추가하고, currentWeight에 더한다.
// // 4. 무게 제한 때문에 트럭이 진입할 수 없다면
// //    → bridge의 끝에 0을 추가해 다리를 한 칸 이동시킨다(빈 공간 유지).
// // 5. 대기 트럭이 모두 없어지고(currentWeight == 0)이면 모든 트럭이 건넌 것.
// //    → time이 곧 전체 경과 시간이며, 그 값을 반환한다.

// // 핵심 개념
// // - 다리는 매초마다 ‘하나의 칸’씩 이동한다.
// // - queue(shift/push)를 활용해 트럭 이동을 구현한다.
// // - 조건문으로 무게 제한을 관리하면서 동시에 트럭 진입 타이밍을 제어한다.

//   return time;
// }

function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}