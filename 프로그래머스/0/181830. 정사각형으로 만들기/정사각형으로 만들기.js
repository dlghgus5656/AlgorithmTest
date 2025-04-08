function solution(arr) {
    // const answer = arr // 얕은 복사 (같은 참조)
    const answer = arr.map(row => [...row]); //	깊은 복사 (2차원까지)

    const n = arr.length // 행의 수
    const x = arr[0].length // 열의 수
    
    if(n > x) {
        return answer.map(row => [...row, ...Array(n - x).fill(0)]);
    } 
    else if(n < x) {
        const newRows = Array(x - n).fill().map(() => Array(x).fill(0));
        return [...arr, ...newRows];
        
    } else {
      return answer
    }
    
}