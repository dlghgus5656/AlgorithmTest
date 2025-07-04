function solution(s) {
    const answer = []
    const groups = s.slice(2, -2).split("},{");
    const sarr = groups.map(item => item.split(",")).sort((a, b) => a.length - b.length)
    
    
    for (const numbers of sarr) {
        for (const num of numbers) {
            if (!answer.includes(num)) answer.push(num)
        }
    }
    
    return answer.map(Number);
}