function solution(participant, completion) {
     
    
    const dict = new Map()
    
    for (const name of participant) {
        dict.set(name, (dict.get(name) || 0) + 1)
    }
    
    for (const complet of completion) {
        if(dict.has(complet)) {
            dict.set(complet, dict.get(complet) - 1)
        }
        if (dict.get(complet) === 0) dict.delete(complet)
    }
    
    const answer = [...dict.keys()].join("");
    
    return answer;
}