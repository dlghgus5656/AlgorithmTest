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

// 0번 인덱스는 물 (항상 중앙)
// 1번부터는 음식이며, 각 음식은 2로 나눈 몫만큼 양쪽 선수에게 배분
// 음식은 번호순으로 나열하고, 좌우 대칭을 이루도록 배열 구성
// 최종 결과는: [왼쪽 음식들] + 0(물) + [오른쪽 음식들 (역순)]