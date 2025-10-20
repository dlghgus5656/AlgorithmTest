function solution(nums) {
    const N = 2;
    
    const setNums = new Set(nums)
    const result = []
    
    if (setNums.size === 1) return 1; // 같은 종류의 포켓몬만 있을시
    
    for (const num of setNums) {
        if(result.length < Math.floor(nums.length / N)) {
            if (!result.includes(num)) result.push(num)
        }
        else break;   
    }
    
    return result.length;
}