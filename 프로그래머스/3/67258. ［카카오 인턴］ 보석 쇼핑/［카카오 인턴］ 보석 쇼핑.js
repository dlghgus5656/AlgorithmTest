function solution(gems) {
    const setGems = new Set(gems) // 전체 보석 종류
    
    const dict = new Map()
    
    let start = 0;
    // let end = 0;
    
    let result = [0, gems.length - 1]
    
   
    for(let end = 0; end < gems.length; end++) {
        const gem = gems[end];
        dict.set(gem, (dict.get(gem) || 0) + 1);
        
        // 보석 추가 후 모든 종류 포함 시, 최소 구간 갱신 시도
        while (dict.size === setGems.size) {
            
            if (result.length === 0 || 
                end - start < result[1] - result[0]||
                (end - start === result[1] - result[0] && start < result[0]) // 없어도 됨
               ) {
                result = [start, end];
            }
            
            const startGem = gems[start];
            dict.set(startGem, dict.get(startGem) - 1)
            if (dict.get(startGem) === 0) {
                dict.delete(startGem)
            }
            start += 1
        }
        
        
    }    
    
    return [result[0] + 1, result[1] + 1];
}

