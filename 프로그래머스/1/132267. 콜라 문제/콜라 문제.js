function solution(a, b, n) {
    let result = 0;
    
    while (n >= a) {
        const outBottles = Math.floor(n / a) * a
        const inBottles = Math.floor(n / a) * b
        
        n  = n - outBottles + inBottles
        
        result += inBottles
    }
    
    return result;
}