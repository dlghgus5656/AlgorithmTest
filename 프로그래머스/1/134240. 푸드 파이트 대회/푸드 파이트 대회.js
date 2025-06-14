function solution(food) {
    const result = []
    
    for (let i = 1; i < food.length; i++) {
        const foodNum = Math.floor(food[i] / 2)
        if (foodNum < 1) continue;
        let count = 0
        
        while (count < foodNum) {
            result.push(i)
            count++

        }
        
    }
    const reverse = result.slice().reverse() // 원본 배열 유지용 slice
    
    return [...result, 0,...reverse].join("");
}

// 0번 인덱스는 물 즉 1번 인덱스부터 음식 시작
// 음식을 2로 나눈 몫만큼 두명에게 좌우 분배
// 마지막 음식까지 분배후 가운데는 0