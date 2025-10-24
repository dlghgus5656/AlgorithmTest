function solution(arr)
{
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (answer[answer.length - 1] !== num) answer.push(num)
    }
    
    return answer;
}

