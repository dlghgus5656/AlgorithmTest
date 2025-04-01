function solution(arr) {
    const answer = arr.reduce((acc, cur, i) => {
        if(acc === []) {
            acc.push(cur)
        } else if(acc[acc.length - 1] === cur){
            acc.pop()
        } else {
            acc.push(cur)
        }
        return acc
    },[])
    
    return answer.length === 0 ? [-1] : answer;
}