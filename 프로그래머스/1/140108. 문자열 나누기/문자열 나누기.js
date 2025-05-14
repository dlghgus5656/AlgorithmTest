function solution(s) {
    let curS = ""
    let xcount = 0; // 첫 글자 카운트
    let scount = 0; // 첫 글자 아닌 카운트
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (xcount === 0 && scount === 0) { // 서로 0일시 현재 위치를 x로
            curS = s[i]; 
        }
        
        if (curS === s[i]) {
            xcount++
        } else {
            scount++
        }
        
        if (xcount === scount) {
            xcount = 0
            scount = 0
            result++
        }
        
    }
    // 카운트가 남아있는건 조각 하나가 남아있단 뜻 result를 1 증가
    if (xcount > 0 || scount > 0) {
        result++;
    }
    
    return result === 0 ? 1 : result;
}