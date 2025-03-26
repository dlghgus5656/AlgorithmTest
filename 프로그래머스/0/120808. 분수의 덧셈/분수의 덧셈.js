

function solution(numer1, denom1, numer2, denom2) {
    let gcd = 0

    // 최대공약수 구하기
    function startgcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return gcd = a;  // 최대공약수 반환
}
    //기약분수 구하기
    const numer = (numer1 * denom2) + (numer2 * denom1) // 분자
    const denom = denom1 * denom2 // 분모
    
    startgcd(numer, denom)
    
    if (gcd > 1) {
        return [numer/gcd, denom/gcd]
    } else {
        return [numer, denom]
    }
}