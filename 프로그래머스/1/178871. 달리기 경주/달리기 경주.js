// function solution(players, callings) {
//     const idxMap = new Map(); // 선수 → 인덱스
//     const playersArr = [...players] //원본 보호 복사
    
//      // 인덱스 맵 초기화
//     for (let i = 0; i < playersArr.length; i++) {
//         idxMap.set(playersArr[i], i);
//     }
    
//     for (const call of callings) {
//         const idx = idxMap.get(call);
//         // const callIndex = playersArr.findIndex(name => name === call)
        
//         // 스왑
//         if(idx > 0) [playersArr[idx - 1], playersArr[idx]] = [playersArr[idx], playersArr[idx - 1]];
        
//          // 인덱스 갱신 = 순위 변경
//         idxMap.set(call, idx - 1);
//         idxMap.set(playersArr[idx - 1], idx);
   
//     }
        
//     return playersArr;
// }
function solution(players, callings) {
    const idxMap = new Map(); // 선수 → 인덱스
    const arr = [...players]; // 원본 보호용 복사

    // 인덱스 맵 초기화
    for (let i = 0; i < arr.length; i++) {
        idxMap.set(arr[i], i);
    }

    for (const call of callings) {
        const idx = idxMap.get(call); // O(1)

        if (idx === 0) continue;

        const front = arr[idx - 1];

        // 스왑
        [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];

        // 인덱스 갱신
        idxMap.set(call, idx - 1);
        idxMap.set(front, idx);
    }

    return arr;
}
