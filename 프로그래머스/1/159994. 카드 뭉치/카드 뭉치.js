function solution(cards1, cards2, goal) {
    let count1 = 0
    let count2 = 0
    
    for (const goalStr of goal) {
        if (cards1[count1] === goalStr) {
            count1++
        } 
        else if(cards2[count2] === goalStr) {
            count2++
        }
        else {
            return "No"
        }
    }
    
    return "Yes";
}