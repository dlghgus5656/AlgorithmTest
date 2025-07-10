function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const knum = n.toString(k).split(/0+/);
    
    const answer = knum.reduce((sum, cur) => isPrime(Number(cur)) ? sum + 1 : sum, 0)
    
    return answer;
}

// 소수는 2이상