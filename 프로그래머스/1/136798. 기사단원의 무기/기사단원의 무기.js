function solution(number, limit, power) {    
    const numArr =  Array(number + 1).fill(0);
          
    for (let i = 1; i <= number; i++) {
        // j는 i의 배수
        // i는 j의 약수
        for (let j = i; j <= number; j += i) {
            numArr[j]++;
        }
    }
    
    const result = numArr.reduce((sum, cur) => cur <= limit ? sum + cur : sum + power )
        
    return result;
}

