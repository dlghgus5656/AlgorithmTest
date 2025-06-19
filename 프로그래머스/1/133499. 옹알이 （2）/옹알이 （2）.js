function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"]
    let result = 0;
    
    for (const babble of babbling) {
        let curWord = babble
        let lastWord = ""
        
        while (curWord.length > 0) {
            let match = false
            
            for (const word of words) {

                if (curWord.startsWith(word) && word !== lastWord) {
                    lastWord = word
                    curWord = curWord.slice(word.length)
                    match = true
                    break;
                } 
            }
            if (match === false) break;
        }
        
        if (curWord.length === 0) result++
    }
    
    
    
    return result;
}