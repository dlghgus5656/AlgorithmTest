function solution(order) {
    let sum = 0;
    
    for (const coffee of order) {
        if(coffee.includes("americano") || coffee === "anything") {
            sum += 4500
        } else {
            sum += 5000
        }
    }
    
    return sum;
}