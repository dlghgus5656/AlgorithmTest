function solution(s, skip, index) {
    const abcArray = []
    
    // a~z skip 제외한 알파벳 배열 생성
    for (let i = 97; i < 123; i++) {
         const charCode = i
         // 아스키 코드를 문자로 변환
        if (!skip.includes(String.fromCharCode(charCode)) ) {
        abcArray.push(String.fromCharCode(charCode))
        }
    }
    
    const sArr = s.split("")
    
    const result = sArr.map((str) => {
        const sumIndex = abcArray.findIndex(abc => abc === str) + index
        
        if(sumIndex >= abcArray.length) {
            return abcArray[sumIndex % abcArray.length]
        } else {
            return abcArray[sumIndex]
        }
    })
            
    return result.join("");
}