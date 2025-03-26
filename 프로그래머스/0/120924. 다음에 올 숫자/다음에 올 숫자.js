function solution(common) {
    var answer = 0;
    const lastItem = common[common.length - 1]

    if(common[1] - common[0] === common[2] - common[1])
        { 
           //등차수열
            answer = lastItem + ( common[1] - common[0] )
        } else {
            //등비수열
            answer = lastItem * (common[1] / common[0])
        }
    
    return answer;
}