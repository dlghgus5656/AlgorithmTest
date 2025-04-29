function solution(players, callings) {
    const idxMap = new Map(); // 선수 → 인덱스
    const playersArr = [...players]; //원본 보호 복사
    
     // 인덱스 맵 초기화
    for (let i = 0; i < playersArr.length; i++) {
        idxMap.set(playersArr[i], i);
    }
    
    for (const call of callings) {
        const idx = idxMap.get(call);
        // const callIndex = playersArr.findIndex(name => name === call)
        if (idx === 0) continue;

        // 스왑 이전의 상대 이름을 먼저 기억
        const front = playersArr[idx - 1];
        // 스왑
       [playersArr[idx - 1], playersArr[idx]] = [playersArr[idx], playersArr[idx - 1]];
        
         // 인덱스 갱신 = 순위 변경
        idxMap.set(call, idx - 1);
        idxMap.set(front, idx);   
    }
        
    return playersArr;
}

