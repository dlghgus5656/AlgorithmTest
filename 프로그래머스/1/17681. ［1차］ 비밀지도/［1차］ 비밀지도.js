function toBinary(n, length) {

  return n.toString(2).padStart(length, "0");
}

function solution(n, arr1, arr2) {
    const answer = [];
    
    const arr1Binary = arr1.map((num) => toBinary(num, n))
    const arr2Binary = arr2.map((num) => toBinary(num, n))
    
    for (let i = 0; i < n; i++) {
        let sum = "";
        
        for (let j = 0; j < arr1Binary[i].length; j++) {
            const bit1 = arr1Binary[i][j];
            const bit2 = arr2Binary[i][j];
            
            sum += (bit1 === "1" || bit2 === "1") ? "#" : " "            
        }
        answer.push(sum)
    }
    return answer;
}