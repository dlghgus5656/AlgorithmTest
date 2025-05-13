function solution(s) {
    const arrS = s.split("")
    
    let maps = new Map();
    let result = []
    
    for (let i = 0; i < arrS.length; i++) {
        const str = arrS[i]
        if (!maps.has(str)) {
                result.push(-1)
            } 
        else {
                result.push(i - maps.get(str)) 
            }
        maps.set(str, i)
    }
    
    return result;
}