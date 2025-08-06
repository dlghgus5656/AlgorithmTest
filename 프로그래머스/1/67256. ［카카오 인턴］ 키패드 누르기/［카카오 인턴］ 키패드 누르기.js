function solution(numbers, hand) {
    const result = [];
    
    const keypad = new Map([
              [1, [0, 0]],
              [2, [0, 1]],
              [3, [0, 2]],
              [4, [1, 0]],
              [5, [1, 1]],
              [6, [1, 2]],
              [7, [2, 0]],
              [8, [2, 1]],
              [9, [2, 2]],
              [0, [3, 1]],
            ]);
   
    let left = [3, 0];
    let right = [3, 2];
    
    for (const num of numbers) {
        if ([1,4,7].includes(num)) {
            result.push("L")
            left = keypad.get(num)
        } 
        else if ([3,6,9].includes(num)) {
            result.push("R")
            right = keypad.get(num)
        } 
        else { // 2, 5, 8, 0 일때
            const numpad = keypad.get(num)
            // leftLength , rightLength 목표 숫자와 손가락 거리
            const leftLength = Math.abs(numpad[0] - left[0]) + Math.abs(numpad[1] - left[1]);
            const rightLength = Math.abs(numpad[0] - right[0]) + Math.abs(numpad[1] - right[1]);
            if (leftLength < rightLength) { // 왼쪽 손가락이 더 가까울 때
                result.push("L")
                left = keypad.get(num)
            }
            else if (rightLength < leftLength){ // 오른쪽 손가락이 더 가까울 때
                result.push("R")
                right = keypad.get(num)
            }
            else { // 양 손가락 거리가 같을때
                if (hand === "left") {
                result.push("L")
                left = keypad.get(num)
                }
                if (hand === "right") {
                result.push("R")
                right = keypad.get(num)
                }
            }
        }   
    }
    
    return result.join("");
}
