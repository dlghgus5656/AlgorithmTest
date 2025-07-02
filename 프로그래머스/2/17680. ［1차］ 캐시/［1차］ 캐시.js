function solution(cacheSize, cities) {
    
    const cacheArr = []; // 캐싱 배열
    let playTime = 0 // 총 실행 시간
        
    for (const city of cities) {
        if (cacheSize === 0) { // 캐시사이즈 0
            return cities.length * 5
        } else {
            const cityLower = city.toLowerCase() // 대소문자 구분 x

            if (cacheArr.length > cacheSize) cacheArr.shift() // 캐시사이즈 초과시 오래된 시티 제거

            if (!cacheArr.includes(cityLower)) { // 캐시된 데이터 아닐시 캐시에 추가
                cacheArr.push(cityLower)
                playTime += 5
            } else {
                const idx = cacheArr.indexOf(cityLower); // 사용된 캐시 위치
                cacheArr.splice(idx, 1) // 제거
                cacheArr.push(cityLower) // 맨 뒤로 재생성
                playTime += 1
            }
        }
    }
    
    return playTime;
}